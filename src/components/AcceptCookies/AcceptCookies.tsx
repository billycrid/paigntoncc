import { useState } from "react";

export const AcceptCookiesModal = ({ inline=false }: { inline?: boolean }) => {
  const [show, setShow] = useState(false);

  const handleReshowBanner = () => {
    // Remove localStorage item
    localStorage.removeItem("CookieConsent");
  
    // Remove actual cookie if set
    document.cookie = "CookieConsent=; path=/; max-age=0";
  
    // Force reload to trigger re-render (or update your banner to use state)
    window.location.reload();
  };

  const modal = () => {
    return <>
        {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            color: 'black',
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "2rem",
              borderRadius: "8px",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3>Manage Your Cookie Preferences</h3>
            <p>You can review or change your cookie settings at any time.</p>

            <button
              onClick={handleReshowBanner}
              style={{
                marginTop: "1rem",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Review Cookie Settings
            </button>

            <br />
            <button
              onClick={() => setShow(false)}
              style={{
                marginTop: "0.75rem",
                background: "transparent",
                border: "none",
                color: "#555",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  }
  
  if(inline) {
    return <span typeof="button" style={{
        bottom: "20px",
        right: "20px",
        padding: "0.5rem 1rem",
        backgroundColor: "#2B373B",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }} onClick={() => setShow(true)}>manage cookies {modal()}</span>
  }
  return (
    <>
      <button
        onClick={() => setShow(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "0.5rem 1rem",
          backgroundColor: "#2B373B",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Manage Cookies
      </button>

      {modal()}
    </>
  );
};
