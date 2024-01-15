import React from 'react';

export default function Profile() {

    const Card = ({ cardName, children }) => {
        return (
            <div className="card">
                <div className="card-content">
                    <h1>{cardName}</h1>
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div>
            <Card cardName="Photo">
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card cardName="About">
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
            </Card>
        </div>
    );
}
