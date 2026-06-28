const states = ["Georgia", "Florida", "Tennessee", "North Carolina", "South Carolina", "Alabama"];

export default function Coverage() {
  return (
    <section
      id="coverage"
      aria-label="Southeast service area"
      className="resp-pad"
      style={{ background: "var(--black-nav)", padding: "6rem 8%" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <div
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--green)",
            marginBottom: "0.7rem",
          }}
        >
          Service Area
        </div>
        <h2
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            fontWeight: 700,
            color: "var(--white)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          Southeast Coverage
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.93rem",
            lineHeight: 1.8,
            maxWidth: "620px",
            margin: "0 auto",
          }}
        >
          We operate across six Southeastern states with owned equipment and direct crews — no
          middlemen, no surprises. Licensed, insured, and ready to mobilize across our full service
          footprint.
        </p>
      </div>

      {/* Two-column: info + map */}
      <div
        className="resp-2col-gap"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {/* Left — info */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--white)",
              marginBottom: "0.9rem",
            }}
          >
            Our Six-State Service Area
          </h3>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.8rem" }}>
            Investment Utilities &amp; Infrastructure is licensed, insured, and fully operational in
            all six states listed below. Each job is handled by our own crew — not passed off to
            third parties.
          </p>

          {/* State chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
            {states.map((s) => (
              <span
                key={s}
                style={{
                  background: "var(--green)",
                  color: "var(--black-nav)",
                  fontFamily: "var(--font-barlow-condensed), sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  padding: "0.4rem 1rem",
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* Emergency note */}
          <div
            style={{
              borderLeft: "3px solid var(--green)",
              paddingLeft: "1.2rem",
            }}
          >
            <strong style={{ display: "block", color: "var(--white)", fontSize: "0.9rem", marginBottom: "0.4rem" }}>
              24/7 Emergency Storm Response Available
            </strong>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.7 }}>
              We maintain rapid-deployment capability across the full coverage area. For urgent storm
              restoration or corridor emergency, call us directly at{" "}
              <a href="tel:+17705297181" style={{ color: "var(--green)", fontWeight: 600 }}>
                (770) 529-7181
              </a>
              .
            </p>
          </div>
        </div>

        {/* Right — verbatim SVG map from about.html */}
        <div style={{ width: "100%", maxWidth: "520px" }}>
          <svg
            viewBox="-10 -30 540 460"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Map of Investment Utilities service area covering Georgia, Florida, Tennessee, North Carolina, South Carolina, and Alabama"
            style={{ width: "100%", height: "auto" }}
          >
            <path d="M 106.7 71.6 L 166.3 72.1 L 172.3 100.1 L 180.6 141.3 L 184.6 150.4 L 188.3 155.6 L 186.8 158.8 L 190.7 160.7 L 184.9 164.9 L 185.1 169.0 L 182.1 174.5 L 185.5 184.3 L 183.1 192.8 L 186.8 201.8 L 170.0 201.9 L 98.6 201.9 L 97.4 206.2 L 105.1 212.5 L 103.8 217.8 L 106.4 220.5 L 101.3 225.3 L 96.7 226.4 L 88.1 221.0 L 87.2 213.0 L 84.6 212.1 L 81.4 218.2 L 80.3 224.1 L 71.6 222.4 L 69.0 172.7 L 76.8 110.8 L 81.6 75.2 L 78.1 71.8 L 106.7 71.6 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 170.0 201.9 L 186.8 201.8 L 191.4 211.2 L 238.0 213.4 L 281.5 215.8 L 283.2 222.8 L 287.3 222.6 L 288.8 216.0 L 287.5 210.0 L 290.7 207.5 L 298.5 210.1 L 307.8 211.4 L 309.8 225.5 L 314.1 241.3 L 324.0 262.2 L 339.1 284.5 L 336.8 286.1 L 337.6 296.4 L 343.9 308.0 L 353.8 331.4 L 355.8 338.7 L 355.6 346.2 L 351.9 373.1 L 348.7 373.7 L 345.4 382.0 L 346.5 384.7 L 340.0 390.8 L 337.4 389.4 L 331.0 391.9 L 320.3 393.3 L 317.1 389.9 L 318.6 384.9 L 310.9 370.5 L 305.0 367.8 L 299.8 369.7 L 295.7 361.7 L 294.6 355.1 L 287.5 347.8 L 285.8 343.0 L 286.9 336.0 L 283.0 334.8 L 284.0 338.9 L 280.4 340.0 L 269.6 322.3 L 265.3 317.8 L 275.6 304.8 L 268.9 305.5 L 264.4 309.6 L 259.9 303.2 L 265.9 285.4 L 267.0 270.6 L 262.9 267.0 L 261.6 262.2 L 255.1 261.1 L 247.5 253.3 L 241.3 250.1 L 241.0 245.3 L 236.7 243.5 L 233.1 238.1 L 220.1 231.0 L 208.7 232.6 L 209.3 237.6 L 205.6 236.7 L 191.4 242.8 L 176.4 244.2 L 176.7 240.6 L 173.2 236.4 L 155.5 226.7 L 142.9 222.6 L 131.5 221.6 L 122.0 222.3 L 101.3 225.3 L 106.4 220.5 L 103.8 217.8 L 105.1 212.5 L 97.4 206.2 L 98.6 201.9 L 170.0 201.9 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 251.2 71.6 L 243.9 78.5 L 243.4 81.9 L 254.7 88.9 L 258.3 88.4 L 263.5 95.5 L 264.6 99.2 L 270.0 106.0 L 277.8 110.1 L 282.3 116.2 L 291.4 121.7 L 291.0 125.4 L 297.0 131.5 L 306.1 136.5 L 308.3 141.8 L 308.7 148.8 L 313.4 151.1 L 318.8 159.9 L 318.9 165.4 L 326.8 168.2 L 318.4 179.3 L 316.9 185.0 L 313.4 190.0 L 313.0 195.2 L 309.3 197.5 L 307.8 211.4 L 298.5 210.1 L 290.7 207.5 L 287.5 210.0 L 288.8 216.0 L 287.3 222.6 L 283.2 222.8 L 281.5 215.8 L 238.0 213.4 L 191.4 211.2 L 186.8 201.8 L 183.1 192.8 L 185.5 184.3 L 182.1 174.5 L 185.1 169.0 L 184.9 164.9 L 190.7 160.7 L 186.8 158.8 L 188.3 155.6 L 184.6 150.4 L 180.6 141.3 L 172.3 100.1 L 166.3 72.1 L 210.1 71.9 L 233.9 72.1 L 251.2 71.6 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 224.2 -51.1 L 231.8 -46.6 L 237.2 -49.0 L 250.1 -46.5 L 253.8 -49.7 L 258.6 -50.7 L 260.1 -45.2 L 264.0 -44.3 L 268.7 -39.9 L 267.8 -30.1 L 271.9 -23.8 L 277.3 -19.0 L 278.9 -15.3 L 285.4 -11.5 L 289.9 -11.0 L 276.9 -2.2 L 264.4 2.6 L 264.4 5.1 L 259.4 7.2 L 259.0 10.1 L 252.5 11.3 L 250.3 14.9 L 232.0 19.5 L 231.5 20.1 L 202.4 19.7 L 177.1 18.6 L 170.4 19.0 L 132.8 17.7 L 90.0 18.5 L 82.5 17.0 L 83.1 22.9 L 40.8 22.6 L 36.8 22.9 L 38.6 18.8 L 43.6 20.2 L 46.4 7.0 L 44.8 5.3 L 50.0 -0.5 L 53.9 -0.8 L 66.3 4.2 L 70.6 1.5 L 67.5 -2.8 L 68.8 -6.2 L 82.7 -9.2 L 79.6 -14.9 L 84.0 -19.5 L 87.2 -22.6 L 95.8 -22.9 L 98.6 -25.2 L 101.5 -22.9 L 106.0 -24.0 L 114.6 -19.2 L 117.4 -22.6 L 125.9 -25.8 L 128.1 -22.6 L 135.8 -23.8 L 135.2 -27.4 L 142.7 -31.5 L 144.0 -27.7 L 151.6 -24.7 L 155.5 -26.8 L 158.7 -35.0 L 164.6 -36.7 L 166.9 -40.8 L 172.6 -43.4 L 172.3 -49.8 L 181.0 -48.4 L 187.3 -51.5 L 193.3 -51.6 L 190.5 -60.5 L 193.1 -62.0 L 206.1 -62.0 L 213.0 -55.2 L 213.6 -52.3 L 224.2 -51.1 Z" fill="#252525" stroke="#333" strokeWidth="1" strokeLinejoin="round"/>
            <path d="M 69.0 71.8 L 78.1 71.8 L 81.6 75.2 L 76.8 110.8 L 69.0 172.7 L 71.6 222.4 L 67.8 223.9 L 59.6 223.2 L 56.3 221.0 L 48.1 222.4 L 36.8 226.2 L 33.2 228.5 L 29.1 225.1 L 27.8 219.8 L 22.2 212.6 L 25.6 201.9 L -38.6 201.9 L -36.2 199.6 L -38.6 193.2 L -34.5 192.8 L -34.0 180.9 L -30.6 181.6 L -28.6 174.3 L -20.6 169.7 L -16.5 162.2 L -17.2 152.5 L -22.3 148.4 L -21.9 141.8 L -19.5 140.4 L -22.6 136.7 L -20.0 132.2 L -21.9 125.4 L -18.9 122.8 L -24.9 118.5 L -19.5 108.5 L -13.3 103.3 L -15.4 99.8 L -8.3 94.4 L -8.5 92.3 L -2.3 90.5 L -2.9 84.1 L 0.6 82.6 L 3.1 77.1 L 8.5 74.6 L 6.4 71.8 L 69.0 71.8 Z" fill="#252525" stroke="#333" strokeWidth="1" strokeLinejoin="round"/>
            <path d="M 323.6 20.8 L 346.9 21.3 L 373.5 21.5 L 497.3 21.1 L 501.2 34.1 L 491.7 32.9 L 490.4 34.5 L 478.8 36.5 L 477.2 38.2 L 469.5 38.8 L 469.9 41.1 L 479.2 39.5 L 480.5 40.9 L 490.8 39.3 L 494.1 42.3 L 500.3 41.1 L 502.5 48.9 L 500.4 52.7 L 496.3 53.0 L 487.8 61.1 L 476.4 61.4 L 474.6 67.0 L 479.4 72.5 L 483.3 73.6 L 476.1 82.6 L 469.9 81.6 L 459.1 82.5 L 451.7 84.4 L 439.9 90.7 L 430.6 98.9 L 425.8 109.2 L 418.7 106.9 L 406.4 109.0 L 367.9 78.0 L 329.7 77.5 L 330.3 73.7 L 325.1 68.2 L 321.6 70.2 L 321.4 66.8 L 279.5 65.2 L 270.2 66.4 L 262.9 69.4 L 251.2 71.6 L 233.9 72.1 L 210.1 71.9 L 211.0 64.3 L 217.7 63.6 L 220.3 58.2 L 228.7 53.4 L 238.0 53.2 L 246.4 48.2 L 255.1 46.4 L 262.5 39.1 L 267.2 37.0 L 268.1 40.2 L 281.5 34.0 L 287.7 35.2 L 292.0 29.1 L 298.3 27.5 L 299.8 19.9 L 323.6 20.8 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 262.9 69.4 L 270.2 66.4 L 279.5 65.2 L 321.4 66.8 L 321.6 70.2 L 325.1 68.2 L 330.3 73.7 L 329.7 77.5 L 367.9 78.0 L 406.4 109.0 L 400.5 110.6 L 393.0 116.0 L 385.8 124.4 L 384.5 131.1 L 378.7 136.5 L 371.1 136.5 L 369.4 140.4 L 361.4 144.7 L 356.9 149.3 L 349.8 151.3 L 342.2 156.3 L 341.5 158.6 L 334.4 161.3 L 326.8 168.2 L 318.9 165.4 L 318.8 159.9 L 313.4 151.1 L 308.7 148.8 L 308.3 141.8 L 306.1 136.5 L 297.0 131.5 L 291.0 125.4 L 291.4 121.7 L 282.3 116.2 L 277.8 110.1 L 270.0 106.0 L 264.6 99.2 L 263.5 95.5 L 258.3 88.4 L 254.7 88.9 L 243.4 81.9 L 243.9 78.5 L 251.2 71.6 L 262.9 69.4 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 83.1 22.9 L 82.5 17.0 L 90.0 18.5 L 132.8 17.7 L 170.4 19.0 L 177.1 18.6 L 202.4 19.7 L 231.5 20.1 L 232.0 19.5 L 299.8 19.9 L 298.3 27.5 L 292.0 29.1 L 287.7 35.2 L 281.5 34.0 L 268.1 40.2 L 267.2 37.0 L 262.5 39.1 L 255.1 46.4 L 246.4 48.2 L 238.0 53.2 L 228.7 53.4 L 220.3 58.2 L 217.7 63.6 L 211.0 64.3 L 210.1 71.9 L 166.3 72.1 L 106.7 71.6 L 78.1 71.8 L 69.0 71.8 L 6.4 71.8 L 9.8 70.9 L 13.1 65.2 L 12.6 57.3 L 18.9 52.0 L 20.0 47.0 L 25.0 45.2 L 26.1 39.1 L 32.8 30.9 L 32.7 22.9 L 34.5 22.9 L 36.8 22.9 L 40.8 22.6 L 83.1 22.9 Z" fill="#6EE04A" stroke="#0a0a0a" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M 513.3 -26.5 L 518.5 -27.0 L 514.0 -21.5 L 509.4 -19.5 L 506.6 -12.0 L 499.5 0.1 L 493.7 2.6 L 491.9 -1.9 L 494.9 -11.9 L 504.0 -24.5 L 513.3 -26.5 Z M 492.2 -24.5 L 493.0 -24.5 L 491.3 -24.5 L 492.2 -24.5 Z M 413.0 -73.7 L 430.6 -62.9 L 434.4 -69.1 L 439.6 -68.6 L 443.3 -65.9 L 443.3 -61.1 L 450.4 -59.5 L 454.8 -56.4 L 457.4 -51.8 L 454.5 -46.6 L 450.4 -45.2 L 447.8 -40.6 L 449.2 -37.2 L 458.4 -38.3 L 460.0 -33.1 L 472.0 -30.9 L 475.3 -26.8 L 484.8 -22.4 L 480.5 -13.3 L 484.4 -6.2 L 479.8 -2.8 L 479.2 1.3 L 483.5 3.8 L 478.8 7.8 L 471.8 2.6 L 470.1 4.4 L 476.2 8.1 L 493.0 9.0 L 497.3 21.1 L 373.5 21.5 L 346.9 21.3 L 323.6 20.8 L 299.8 19.9 L 232.0 19.5 L 250.3 14.9 L 252.5 11.3 L 259.0 10.1 L 259.4 7.2 L 264.4 5.1 L 264.4 2.6 L 276.9 -2.2 L 289.9 -11.0 L 289.4 -8.3 L 294.0 -2.8 L 299.8 -0.1 L 304.1 -0.3 L 310.6 -4.6 L 315.2 -1.2 L 324.0 -2.9 L 339.4 -9.2 L 340.7 -7.2 L 346.7 -10.1 L 346.9 -16.0 L 350.6 -21.1 L 356.9 -26.0 L 359.5 -31.8 L 366.2 -37.9 L 368.8 -45.4 L 374.6 -40.9 L 380.2 -39.5 L 383.7 -42.2 L 391.0 -53.8 L 395.3 -50.9 L 411.1 -64.1 L 413.0 -73.7 Z" fill="#252525" stroke="#333" strokeWidth="1" strokeLinejoin="round"/>
            <text x="185" y="52" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">TENN.</text>
            <text x="387" y="55" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">N. CAROLINA</text>
            <text x="358" y="118" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">S. CAROLINA</text>
            <text x="137" y="158" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">ALABAMA</text>
            <text x="232" y="152" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">GEORGIA</text>
            <text x="228" y="308" fontFamily="'Barlow Condensed',sans-serif" fontSize="12" fontWeight="700" fill="#0a0a0a" textAnchor="middle">FLORIDA</text>
            <text x="37" y="158" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="400" fill="#666" textAnchor="middle">MISS.</text>
            <text x="415" y="16" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="400" fill="#666" textAnchor="middle">VA</text>
            <text x="165" y="8" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fontWeight="400" fill="#666" textAnchor="middle">KY</text>
            {/* HQ star marker — Cleveland, GA */}
            <polygon points="229.0,78.7 230.6,82.4 234.7,82.8 231.7,85.6 232.5,89.6 229.0,87.5 225.5,89.6 226.3,85.6 223.3,82.8 227.4,82.4" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="0.5"/>
            <text x="229" y="100" fontFamily="'Barlow Condensed',sans-serif" fontSize="9" fill="#0a0a0a" textAnchor="middle" fontWeight="600">HQ: Cleveland, GA</text>
            {/* Legend */}
            <rect x="2" y="390" width="12" height="12" fill="#6EE04A" rx="2"/>
            <text x="19" y="401" fontFamily="Open Sans,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Service states</text>
            <rect x="2" y="408" width="12" height="12" fill="#252525" rx="2"/>
            <text x="19" y="419" fontFamily="Open Sans,sans-serif" fontSize="10" fill="rgba(255,255,255,0.5)">Surrounding states</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
