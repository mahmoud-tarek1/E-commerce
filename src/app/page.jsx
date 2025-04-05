import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
        }}
      >
        <h1
  style={{
    fontSize: "clamp(32px, 5vw, 60px)",
    background: "linear-gradient(to bottom, blue, white)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
   
    textTransform: "uppercase",
  }}
>
  Your Best Online Shop Destination!
</h1>

        <p style={{ fontSize: "clamp(16px, 3vw, 24px)", lineHeight: "1.5" }}>
          Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.
        </p>
        <button
          style={{
            backgroundColor: "blue",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "fit-content",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          Shop Now
        </button>
      </div>
      <div style={{ flex: 1, maxWidth: "100%", textAlign: "center" }}>
        <Image
          src="/Hero.png"
          layout="responsive"
          width={400}
          height={400}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
