import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcome to the site</p>
                        <ol>
                            <li>Confirm email</li>
                            <li>Complete your profile</li>
                            <li>Subscribe Newsletter</li>
                        </ol>
                    </div>
                ) : (
                    <p>Please Sign in</p>
                )
            }
        </div>
    )
}

export default UserMessage