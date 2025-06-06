import useCookieConsent from "../../hooks/useCookieConsent";

export const OnesMap = () => {
    const hasConsent = useCookieConsent();

    if (!hasConsent) {
        return <div className="MiniAbout">
        <h4 className="Title">PAIGNTON 1ST & 2ND TEAM</h4>
            <span>Queens Park</span><br/>
            <span>Queens Road</span><br/>
            <span>Paignton</span><br/>
            <span>Devon</span><br/>
            <span>TQ4 6AT</span><br/><br/>
            <span>Telephone: 01803 557715</span><br/>
            <span>Email: paigntoncricketclub@gmail.com</span> 
        </div>
    }
    return <div className="MiniAbout">
        <h4 className="Title">PAIGNTON 1ST & 2ND TEAM</h4>
        <iframe 
            width="100%"
            title="map"
            height="300px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3826048017886!2d-3.5648798844248675!3d50.43397369643321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486d1a9e5a56a77f%3A0x8ec765b59abe74b5!2sPaignton%20Rugby%20and%20cricket%20club!5e0!3m2!1sen!2suk!4v1650920868445!5m2!1sen!2suk"
        />
    </div>
}