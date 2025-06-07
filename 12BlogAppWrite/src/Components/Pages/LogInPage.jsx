import React from "react";
import {Container} from "../Container/Container"
import { Login } from "../Login";
export const LogInPage=()=>{
    return (
        <div className="py-8">
            <Container>
                <Login/>
            </Container>
        </div>
    );
}