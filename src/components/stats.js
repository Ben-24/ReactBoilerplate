import React from 'react';
import '../css/stats.css';
import {withAuthorization} from "./Session";
import {Card} from "antd";
import moment from "moment";
import {LoginTime} from "../screens/sign_in";
//let lastSessionTime = moment.duration(LogoutTime.diff(LoginTime));
let currentTime = moment().format();
const Stats = () => (
    <div>
        <h1 className={"statsTitle"}>We like statistics. A lot! Take a look at yours </h1>
        <Card title="Last Session" style={{ width: 300 }}>
            <h2>
               Last Session
                {LoginTime + "   asdfg " + currentTime}
            </h2>

        </Card>
        <h2>Time spent working</h2>

    </div>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Stats);
