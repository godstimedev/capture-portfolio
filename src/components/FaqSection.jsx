import styled from "styled-components";
import { Layout } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
        <h2>Any Questions <span>FAQ</span></h2>
        <div className="question">
            <h4>How Do I Start</h4>   
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Daily Schedule</h4>   
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
            </div>
            <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>Different payment Methods</h4>   
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
            </div>
        <div className="faq-line"></div>
        </div>
        <div className="question">
            <h4>What products do you offer?</h4>    
            <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae?</p>
            </div>
            <div className="faq-line"></div>
        </div>
    </Faq>
  );
}
 const Faq = styled(Layout)`
    display: block; 
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: 400;
    }
    h4{
        color: white;
        font-size: 2rem;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
    p{
        padding: 1rem 0;
    }
    }
 `;


export default FaqSection;