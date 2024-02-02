// Card.js
import React from 'react';
import { FaUsers } from 'react-icons/fa6';
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaUserClock } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import './Card.scss';  // Asegúrate de que esta importación sea correcta
const Card = (props) => {
    return (
        <div>
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">$400</div>
                        <div className="cardName">Total Deudas</div>
                    </div>

                    <div className="iconBx">
                        <GiTakeMyMoney />
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Deudores</div>
                    </div>

                    <div className="iconBx">
                        <FaUserClock />
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">284</div>
                        <div className="cardName">Alumnos</div>
                    </div>

                    <div className="iconBx">
                        <FaUsers />
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Taltal Fondos</div>
                    </div>

                    <div className="iconBx">
                        <GiMoneyStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;