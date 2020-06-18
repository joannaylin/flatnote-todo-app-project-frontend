import styled from "styled-components";
import { Link } from "react-router-dom";


export const ButtonLink = styled(Link)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  padding: 8px 12px;
  text-decoration: none;
  text-align: center;
  width: 150px;
  margin-left: 0;
  margin-right: 30px;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: 0.5em 1em;
  margin-top: 17px;
  padding: 8px 12px;
  width: 135px;
  text-decoration: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 340px;
  margin-top: 165px;
  width: 800px;
  height: 430px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
`;

export const FormField = styled.input`
  width: 720px;
  height: 40px;
  border: none;
  margin-top: 20px;
  background-color: white;
  border-radius: 3px;
  padding: 10px 15px 5px 15px;
  font-family: "Lucinda",sans-serif;
  :focus {
    outline: none;
  }
`;

export const FormFieldArea = styled.textarea`
  width: 720px;
  height: 250px;
  border: none;
  background-color: white;
  margin-top: 20px;
  border-radius: 3px;
  padding: 10px 15px 5px 15px;
  font-family: "Lucinda",sans-serif;
  :focus {
    outline: none;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin-top: 165px;
`;

export const TodoContainer = styled.div`
  text-align: center;
`;

export const ContainerTitle = styled.h1`
  letter-spacing: 0.1em;
  margin-bottom: 30px;
  font-size: 40px;
  background: rgba(255, 255, 255, 0.8);
  width: 753px;
  margin-left: 340px;
  padding: 20px;
  border-radius: 3px;
`

export const ListItemTitle = styled.h1`
  font-weight: bold;
  font-size: 35px;
`;

export const ListItemContent = styled.p`
  font-style: italic;
  padding: 15px;
  margin-bottom: 30px;
  text-indent: -15px
`;

export const ItemDiv = styled.div`
  display: block;
`;

export const ListItem = styled.div`
  display: flex;
  padding: 1rem 3rem;
  height: 200px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  position: relative;
  width: 700px;
  margin-left: 340px;
  margin-bottom: 20px;
  border-radius: 3px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 540px;
  margin-top: 165px;
  width: 400px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  font-family: "Lucinda",sans-serif;
`;

export const LoginFormField = styled.input`
  width: 330px;
  height: 40px;
  border: none;
  margin-top: 20px;
  background-color: white;
  border-radius: 3px;
  padding: 10px 15px 5px 15px;
  
  :focus {
    outline: none;
  }
`;