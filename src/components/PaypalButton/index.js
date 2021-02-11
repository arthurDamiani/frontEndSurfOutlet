import React, { useRef, useEffect } from 'react'

function PaypalButton() {
    const paypal = useRef()
    
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchese_units: [
                        {
                            description: 'Moletom Billabong',
                            amount: {
                                currency_code: 'BRL',
                                value: 100.00,
                            },
                        },
                    ],
                })
            },
            onApprove: async (data, actions) => {
                return actions.order.capture().then((details) => console.log(details))
            },
            onError: async (err) => console.log(err)
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaypalButton
