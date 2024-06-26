import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Accommodation from "../components/PaymentPageComponents/Accommodation";
import Modal from "../components/Modal";
import { AppContext } from "../App";
const PaymentPage = () => {
    const { isOpen, setIsOpen } = useContext(AppContext);
    const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(null);
    const paymentData = [
        {
            imgSrc: `${process.env.PUBLIC_URL}/assets/images/pageImg/nfts.svg`,
            altText: "RightArrow",
            title: "USDC",
            description: "Pay securely using your credit card.",
        },
        {
            imgSrc: `${process.env.PUBLIC_URL}/assets/images/pageImg/nfts.svg`,
            altText: "RightArrow",
            title: "USDT",
            description: "Pay with your PayPal account for convenience.",
        },
    ];

    const handlePaymentClick = (index) => {
        setSelectedPaymentIndex(index === selectedPaymentIndex ? null : index);
    };
    const handleSelectButton = () => {
        setIsOpen(true);
    };

    return (
        <Container>
            <Accommodation />
            <Divider />

            <Title>
                <Text>Choose Payment Method</Text>
                <div>
                    {paymentData.map((item, index) => (
                        <Payment
                            key={index}
                            selected={index === selectedPaymentIndex}
                            onClick={() => handlePaymentClick(index)}
                        >
                            <IMG>
                                <img src={item.imgSrc} alt={item.altText} />
                            </IMG>
                            <div>
                                <SubTitle>{item.title}</SubTitle>
                                <p>{item.description}</p>
                            </div>
                        </Payment>
                    ))}
                    {selectedPaymentIndex !== null ? (
                        <Link to="/myPage">
                            <PaymentButton>Proceed to Payment</PaymentButton>
                        </Link>
                    ) : (
                        <PaymentButton onClick={handleSelectButton}>
                            Proceed to Payment
                        </PaymentButton>
                    )}
                    {isOpen && (
                        <Modal
                            iconUrl="/assets/icons/error.svg"
                            title="Payment Method Selection"
                            subTitle="Select Your Preferred Payment Method !"
                            buttonTexts={[
                                "Choose Payment Method",
                                "Back to HomePage",
                            ]}
                            buttonColors={["#dc2626", "#FFF"]}
                            buttonTextColors={["#FFF", "#000"]}
                        />
                    )}
                </div>
            </Title>
        </Container>
    );
};

export default PaymentPage;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
`;
const Divider = styled.div`
    width: 80%;
    height: 1px;
    background-color: rgb(204, 204, 204);
    margin: 10px 0;
    align-self: center;
    /* background-color: #f7f7f7; */
`;
const Title = styled.div`
    /* background-color: #f7f7f799; */
    height: 660px;
    display: flex;
    padding: 60px 170px;
    gap: 60px;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    width: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
`;

const SubTitle = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`;

const Payment = styled.div`
    height: 132px;
    /* width: 520px; */
    display: flex;
    padding: 16px;
    align-items: center;
    border-radius: 6px;
    border: 3px solid rgba(0, 0, 0, 0.1);
    background: ${(props) =>
        props.selected
            ? "rgba(0, 123, 255, 0.1)"
            : "rgba(247, 247, 247, 0.79)"};
    gap: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: rgba(0, 123, 255, 0.2);
    }

    div {
        text-align: start;
    }

    margin-bottom: 60px;
    /* background-color: red; */
`;

const IMG = styled.div`
    align-self: stretch;
    border-radius: 16px;
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    width: 150px;
    align-items: flex-start;
    border-radius: 5px;
`;
const PaymentButton = styled.button`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */

    display: flex;
    width: 240px;
    padding: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: #000;

    cursor: pointer;
`;
