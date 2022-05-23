import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutubeSquare, faFacebookSquare, faLinkedin, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link"




const Footer = () => {
return (

    <div className="py-10 pt-52 bg-bgColor">
        <div className="flex justify-center">
        <FontAwesomeIcon icon={faYoutubeSquare} size="2x" bounce className="pr-4 text-fontAwesome"/>
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" bounce className="pr-4 text-fontAwesome"/>
        <FontAwesomeIcon icon={faLinkedin} size="2x" bounce className="pr-4 text-fontAwesome"/>
        <FontAwesomeIcon icon={faInstagramSquare} size="2x" bounce className="pr-4 text-fontAwesome"/>
        <FontAwesomeIcon icon={faTwitterSquare} size="2x" bounce className="text-fontAwesome"/>
        </div>
        
        <div className="text-gray-500 text-center mt-4">
        <Link href="/terms">
        <a className="pr-10">Terms of service</a>
        </Link>

        <Link href="/privacy">
        <a>Privacy policy</a>
        </Link>
        </div>
        <p className="text-gray-500 text-center mt-4">
        Copyright 2021 @ Peddle Technologies. All Rights Reserved.
        </p>
    </div>
    
    
    
)
}

export default Footer