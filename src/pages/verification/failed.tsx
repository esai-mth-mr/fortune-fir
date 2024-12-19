import { useEffect, useState } from 'react';

function Failed(){
    return(
        <div className='board'>
            <div className='verify_failed'>
                <div>
                    <img src=""/>
                </div>
                <div>
                    Authentication Error
                </div>
                <div>
                    Access Expired.Please try again
                </div>
                <div>
                    Back
                </div>
            </div>
        </div>
    )
}

export default Failed;