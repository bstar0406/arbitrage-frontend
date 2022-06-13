import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__nav">
          <div className="footer__nav-item">
            <h5 className="footer__nav-title">About us</h5>
            <ul className="footer__nav-list">
              <li className="footer__nav-line">
                <Link className="footer__link" to="#">
                  About BNAX
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://docs.google.com/forms/d/e/92diQLScVTuGtHjiSifjRO6yXIj2T6nFxmyOjDRFfUs6vf78k_iswUw/"
                >
                  Careers
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link className="footer__link" to="mailto:business@bnax.com">
                  Business Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__nav-item">
            <h5 className="footer__nav-title">Support</h5>
            <ul className="footer__nav-list">
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us/requests/new"
                >
                  Submit a Ticket
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us"
                >
                  Knowledge Base
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__nav-item">
            <h5 className="footer__nav-title">Service</h5>
            <ul className="footer__nav-list">
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us"
                >
                  Help Center
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link className="footer__link" to="/fees">
                  Fees
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link className="footer__link" to="/account/referrals">
                  Referrals
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link className="footer__link" to="https://github.com/bnax">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__nav-item">
            <h5 className="footer__nav-title">Legal</h5>
            <ul className="footer__nav-list">
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us/articles/4416479592723-AML-CFT-Policy"
                >
                  AML&amp;CFT Policy
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us/sections/4415915397011-SECURITY"
                >
                  Security
                </Link>
              </li>
              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us/sections/4415893834387-LEGAL-PRIVACY"
                >
                  Legal Statement
                </Link>
              </li>

              <li className="footer__nav-line">
                <Link
                  className="footer__link"
                  to="https://bnax.zendesk.com/hc/en-us/articles/4415923719827-Risk-Warning"
                >
                  Risk Warning
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__nav-item">
            <h5 className="footer__nav-title">Community</h5>
            <div className="footer__social">
              <Link
                className="footer__social-item"
                to="https://facebook.com/BNAXcom"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 16.084C28 22.1 23.6093 27.0973 17.8747 28.0133V19.5733H20.6787L21.2027 16.0827H17.888V13.816C17.888 12.8613 18.3493 11.9213 19.8347 11.9213H21.3573V8.96C21.3573 8.96 19.9747 8.728 18.6693 8.728C15.9293 8.728 14.1253 10.4027 14.1253 13.4173V16.084H11.0787V19.5747H14.1253V28.0133C11.297 27.5488 8.72591 26.094 6.87116 23.9088C5.01641 21.7236 3.99878 18.9502 4 16.084C4 9.41067 9.376 4 16.0067 4C22.6373 4 28 9.41067 28 16.084Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>
              <Link
                className="footer__social-item"
                to="https://twitter.com/BNAXcom"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3695 24C19.7467 24 23.7851 17.8496 23.7851 12.5195C23.7851 12.3488 23.7851 12.1781 23.7743 11.9968C24.5635 11.4238 25.242 10.7168 25.7777 9.90933C25.0574 10.2293 24.2827 10.4427 23.4668 10.5493C24.311 10.0346 24.9393 9.2399 25.2377 8.30933C24.4631 8.77867 23.6048 9.10933 22.6823 9.29067C22.3155 8.88499 21.8653 8.56022 21.3614 8.33776C20.8574 8.11529 20.3112 8.00018 19.7586 8C17.5422 8 15.7408 9.81227 15.7408 12.0395C15.7408 12.3595 15.7832 12.6581 15.8473 12.9568C12.5183 12.7968 9.56092 11.1765 7.57918 8.736C7.2223 9.35693 7.03585 10.0582 7.03811 10.7712C7.03811 12.1685 7.74867 13.4048 8.81994 14.1291C8.18318 14.1079 7.56106 13.9359 7.00661 13.6277V13.6811C7.00661 15.6331 8.39513 17.2736 10.2182 17.6363C9.87322 17.7315 9.5162 17.7781 9.15784 17.7749C8.9036 17.7749 8.64936 17.7536 8.40599 17.7003C8.91447 19.3099 10.3986 20.4715 12.1576 20.5035C10.7478 21.6227 8.9892 22.2327 7.1761 22.2315C6.85776 22.2315 6.52964 22.2208 6.22217 22.1781C8.0434 23.3674 10.1822 24.0012 12.3695 24Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>
              <Link
                className="footer__social-item"
                to="https://www.reddit.com/r/BNAXadm/"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5147 20.1031C17.9773 20.6404 16.8253 20.8324 16.0067 20.8324C15.1867 20.8324 14.0347 20.6404 13.4973 20.1031C13.4672 20.0728 13.4314 20.0487 13.3919 20.0322C13.3524 20.0158 13.3101 20.0073 13.2673 20.0073C13.2246 20.0073 13.1822 20.0158 13.1428 20.0322C13.1033 20.0487 13.0675 20.0728 13.0373 20.1031C13.007 20.1332 12.9829 20.1691 12.9664 20.2085C12.95 20.248 12.9415 20.2904 12.9415 20.3331C12.9415 20.3759 12.95 20.4182 12.9664 20.4577C12.9829 20.4972 13.007 20.533 13.0373 20.5631C13.8947 21.4084 15.52 21.4724 16.0067 21.4724C16.4933 21.4724 18.1187 21.4084 18.976 20.5511C19.0066 20.521 19.0308 20.4851 19.0474 20.4455C19.0639 20.4059 19.0725 20.3634 19.0725 20.3204C19.0725 20.2775 19.0639 20.235 19.0474 20.1954C19.0308 20.1558 19.0066 20.1199 18.976 20.0898C18.9118 20.033 18.8284 20.0027 18.7427 20.0052C18.657 20.0077 18.5755 20.0427 18.5147 20.1031ZM14.5093 17.2484C14.5086 16.916 14.3762 16.5974 14.141 16.3625C13.9058 16.1276 13.5871 15.9955 13.2547 15.9951C12.9222 15.9955 12.6035 16.1276 12.3683 16.3625C12.1332 16.5974 12.0007 16.916 12 17.2484C12 17.9391 12.5627 18.5018 13.2533 18.5018C13.9467 18.5018 14.5093 17.9391 14.5093 17.2484Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                  <path
                    d="M16.0067 4C12.8223 4 9.76836 5.26498 7.51667 7.51667C5.26498 9.76836 4 12.8223 4 16.0067C4 19.191 5.26498 22.245 7.51667 24.4967C9.76836 26.7483 12.8223 28.0133 16.0067 28.0133C17.5837 28.0142 19.1453 27.7042 20.6025 27.1012C22.0596 26.4981 23.3835 25.6137 24.4986 24.4986C25.6137 23.3835 26.4981 22.0596 27.1012 20.6025C27.7042 19.1453 28.0142 17.5837 28.0133 16.0067C28 9.376 22.6373 4 16.0067 4ZM22.9693 17.6067C22.996 17.7733 23.008 17.952 23.008 18.1307C23.008 20.832 19.872 23.008 16.0067 23.008C12.14 23.008 9.00533 20.832 9.00533 18.1307C9.00533 17.952 9.01867 17.7733 9.04267 17.6067C8.73283 17.47 8.46971 17.2457 8.28565 16.9614C8.10159 16.6772 8.00462 16.3453 8.00667 16.0067C8.0072 15.663 8.10858 15.327 8.29825 15.0404C8.48791 14.7537 8.75752 14.5291 9.07366 14.3942C9.38979 14.2594 9.73855 14.2202 10.0767 14.2817C10.4149 14.3432 10.7275 14.5025 10.976 14.74C12.192 13.856 13.8693 13.3053 15.7373 13.2547C15.7373 13.228 16.6213 9.068 16.6213 9.068C16.6213 8.992 16.672 8.91467 16.736 8.87733C16.8 8.82533 16.8893 8.81333 16.9787 8.82533L19.8853 9.452C19.9878 9.24342 20.1461 9.06734 20.3427 8.9433C20.5392 8.81926 20.7663 8.75212 20.9987 8.74933C21.6893 8.74933 22.252 9.29867 22.252 10.0027C22.252 10.7067 21.6893 11.2573 20.9987 11.2573C20.6779 11.2579 20.3695 11.1342 20.138 10.9122C19.9065 10.6902 19.7701 10.3871 19.7573 10.0667L17.1453 9.504L16.352 13.2547C18.1947 13.3187 19.8453 13.8813 21.0373 14.7387C21.2834 14.4974 21.5954 14.3344 21.9339 14.2701C22.2724 14.2057 22.6224 14.243 22.9399 14.3771C23.2573 14.5112 23.5279 14.7362 23.7178 15.0238C23.9076 15.3114 24.0081 15.6487 24.0067 15.9933C24.0067 16.7227 23.5707 17.3253 22.9693 17.6067Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                  <path
                    d="M18.7588 16.0068C18.4264 16.0072 18.1077 16.1393 17.8725 16.3742C17.6373 16.6092 17.5049 16.9278 17.5042 17.2602C17.5042 17.9522 18.0668 18.5148 18.7575 18.5148C19.4508 18.5148 20.0135 17.9522 20.0135 17.2615C20.0087 16.9302 19.8749 16.6139 19.6407 16.3797C19.4064 16.1454 19.0901 16.0117 18.7588 16.0068Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>
              <Link
                className="footer__social-item"
                to="https://medium.com/@bnaxcom"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16ZM14.2 12.7L10.6 10.9C10.45 10.825 10.375 10.825 10.3 10.825C10.225 10.825 10.15 10.825 10.075 10.9C10 10.975 10 11.05 10 11.125V19C10 19.075 10 19.225 10.075 19.3C10.15 19.375 10.225 19.45 10.3 19.525L13.6 21.175C13.675 21.175 13.75 21.25 13.825 21.25C13.975 21.25 14.05 21.175 14.05 21.1C14.05 21.025 14.125 20.95 14.125 20.8V12.7H14.2ZM14.65 13.375V17.5L18.4 19.375L14.65 13.375ZM22.6 13.525L18.775 19.6L21.85 21.1C21.925 21.175 22.075 21.175 22.15 21.175C22.225 21.175 22.375 21.175 22.45 21.1C22.525 21.025 22.525 20.95 22.525 20.8V13.525H22.6ZM22.6 12.7L18.775 10.825C18.7 10.75 18.625 10.75 18.55 10.75C18.4 10.75 18.25 10.825 18.175 10.975L15.925 14.65L18.7 19.075C18.925 18.775 19.6 17.65 20.8 15.7C22 13.75 22.6 12.7 22.6 12.7Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>
              <Link
                className="footer__social-item"
                to="https://github.com/BNAXcom/BNAX"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4C9.37346 4 4 9.37252 4 16C4 21.3021 7.43837 25.8002 12.2064 27.3869C12.8061 27.498 13.0263 27.1266 13.0263 26.8096C13.0263 26.5235 13.0151 25.5782 13.01 24.5755C9.67152 25.3014 8.96707 23.1596 8.96707 23.1596C8.42121 21.7725 7.6347 21.4038 7.6347 21.4038C6.54598 20.659 7.71676 20.6742 7.71676 20.6742C8.9218 20.7589 9.55632 21.9109 9.55632 21.9109C10.6266 23.7455 12.3636 23.215 13.0483 22.9085C13.156 22.1328 13.4671 21.6035 13.8102 21.3039C11.1449 21.0003 8.34291 19.9714 8.34291 15.3733C8.34291 14.0633 8.81169 12.9927 9.57938 12.1524C9.45477 11.8501 9.04406 10.6296 9.69561 8.97667C9.69561 8.97667 10.7033 8.65414 12.9965 10.2067C13.9536 9.94078 14.9802 9.80751 16 9.80299C17.0199 9.80751 18.0472 9.94078 19.0062 10.2067C21.2967 8.65414 22.303 8.97667 22.303 8.97667C22.9561 10.6296 22.5452 11.8501 22.4206 12.1524C23.19 12.9927 23.6556 14.0632 23.6556 15.3733C23.6556 19.9823 20.8483 20.9972 18.1763 21.2943C18.6066 21.6667 18.9902 22.397 18.9902 23.5165C18.9902 25.1221 18.9762 26.4144 18.9762 26.8096C18.9762 27.129 19.1922 27.5032 19.8006 27.3853C24.566 25.7968 28 21.3003 28 16C28 9.37252 22.6273 4 16 4Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                  <path
                    d="M8.60255 21.5043C8.57557 21.5653 8.47939 21.5836 8.39198 21.5418C8.30284 21.5017 8.25272 21.4184 8.28163 21.3571C8.30814 21.2943 8.40431 21.2767 8.49327 21.3189C8.5826 21.3589 8.63349 21.443 8.60255 21.5043V21.5043ZM9.20699 22.0436C9.1484 22.0979 9.03381 22.0727 8.95604 21.9868C8.87567 21.9011 8.86063 21.7866 8.92009 21.7314C8.98052 21.6772 9.09164 21.7025 9.1722 21.7883C9.25258 21.8749 9.26819 21.9887 9.2069 22.0437L9.20699 22.0436ZM9.62168 22.7336C9.54632 22.7859 9.42315 22.7369 9.34712 22.6276C9.27185 22.5184 9.27185 22.3873 9.34875 22.3348C9.42508 22.2823 9.54631 22.3295 9.62341 22.4379C9.69858 22.549 9.69858 22.6801 9.62158 22.7337L9.62168 22.7336ZM10.3229 23.5328C10.2555 23.607 10.1121 23.5871 10.0071 23.4858C9.89971 23.3867 9.86974 23.2461 9.93729 23.1718C10.0054 23.0974 10.1497 23.1183 10.2555 23.2188C10.3622 23.3177 10.3948 23.4594 10.323 23.5328H10.3229ZM11.2292 23.8026C11.1996 23.8988 11.0614 23.9426 10.9222 23.9017C10.7832 23.8596 10.6923 23.7468 10.7203 23.6496C10.7492 23.5527 10.888 23.5072 11.0282 23.5509C11.167 23.5928 11.2582 23.7047 11.2292 23.8026H11.2292ZM12.2607 23.917C12.2642 24.0184 12.1461 24.1024 12 24.1043C11.8531 24.1074 11.7342 24.0254 11.7327 23.9258C11.7327 23.8234 11.848 23.7402 11.9949 23.7378C12.141 23.7349 12.2607 23.8163 12.2607 23.917V23.917ZM13.274 23.8782C13.2915 23.9771 13.1899 24.0786 13.0449 24.1056C12.9023 24.1316 12.7702 24.0706 12.752 23.9726C12.7343 23.8712 12.8378 23.7698 12.9801 23.7435C13.1254 23.7182 13.2555 23.7777 13.274 23.8782"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>

              <Link
                className="footer__social-item"
                to="https://steemit.com/@bnax"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 16C4 9.4 9.4 4 16 4C22.6 4 28 9.4 28 16C28 22.6 22.6 28 16 28C9.4 28 4 22.6 4 16ZM17.5 22.9C18.85 22.825 20.2 22.075 21.25 21.1C23.425 18.925 23.5 15.4 21.325 13.15C20.725 12.55 20.05 12.175 19.3 11.875C19.75 10.675 21.25 10.225 21.25 10.225C21.25 10.225 17.8 8.425 13.9 9.175C12.625 9.4 11.35 10.15 10.45 11.2C8.5 13.45 8.8 16.75 11.05 18.7C11.425 19 11.8 19.225 12.175 19.45V19.525C11.65 20.8 10 21.175 10 21.175C10 21.175 12.175 22.525 15.025 22.9C15.85 22.975 16.675 22.975 17.5 22.9ZM14.4251 14.2C15.3251 13.375 16.6001 12.925 17.8751 13.075C18.7751 13.225 19.6751 13.6 20.3501 14.275C22.0001 15.925 21.9251 18.625 20.2751 20.2C19.4501 20.95 18.2501 21.475 17.2751 21.55C16.6001 21.625 15.8501 21.625 15.1751 21.55C14.1251 21.4 13.4501 21.175 12.7001 20.875C13.0751 20.5 13.4501 20.05 13.6001 19.6C13.7501 19.375 13.7501 19.075 13.6001 18.85C12.8501 17.275 13.1501 15.4 14.4251 14.2Z"
                    fill="#0A0F38"
                    fill-opacity="0.5"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="footer__languages">
              <select id="languageSelect" style={{ display: 'none' }}>
                <option value="default" selected>
                  English
                </option>
                <option value="chinese">简体中文</option>
                <option value="german">Deutsch</option>
                <option value="french">Français</option>
                <option value="hindi">हिन्दी</option>
                <option value="korean">한국어</option>
                <option value="spanish">Español</option>
                <option value="turkish">Türkçe</option>
                <option value="vietnamese">Tiếng Việt</option>
                <option value="japanese">日本語</option>
              </select>
              <div className="nice-select" tabIndex={0}>
                <span className="current">English</span>
                <ul className="list"></ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__info">
          <Link className="footer__logo" to="/">
            <img src="./assets/images/logo.svg" alt="BNAX Global" title="" />
          </Link>
          <div className="footer__banners">
            <Link className="footer__banner" to="/">
              <img
                src="./assets/images/bitgo.png"
                alt="BitGo"
                title=""
              />
            </Link>
            <Link className="footer__banner"  to="/">
              <img
                src="./assets/images/comodo-secure.png"
                alt="Comodo Secure"
                title=""
              />
            </Link>
            <Link className="footer__banner"  to="/">
              <img
                src="./assets/images/hsbc-uk.png"
                alt="HSBC UK"
                title=""
              />
            </Link>
          </div>
          <div className="footer__status">
              <div className="status-bar status-bar_variant_normal">
                <div className="status-bar__content"><span className="status-bar__label">Status:</span>
                  <p className="status-bar__text">All systems normal</p>
                  <span className="status-bar__delay">39 ms</span>
                </div>
              </div>
            </div>
        </div>
        <div className="footer__important">
            <ul className="footer__h-nav">
              <li className="footer__h-nav-item">
                <span className="footer__copyright">Copyright © 2021 BNAX Global Ltd. All rights reserved.</span>
              </li>
              <li className="footer__h-nav-item">
                <Link className="footer__h-nav-link" to="mailto:support@bnax.com">support@bnax.com</Link>
              </li>
              <li className="footer__h-nav-item">
                <Link className="footer__h-nav-link footer__h-nav-link_primary" to="https://bnax.zendesk.com/hc/en-us">Support Center</Link>
              </li>
            </ul>
            <ul className="footer__h-nav footer__h-nav_without-border">
              <li className="footer__h-nav-item">
                <Link className="footer__h-nav-link" to="https://bnax.zendesk.com/hc/en-us/articles/4415931258771-Terms-of-Use">Terms of Service</Link>
              </li>
              <li className="footer__h-nav-item">
                <Link className="footer__h-nav-link" to="https://bnax.zendesk.com/hc/en-us/articles/4416496832019-Privacy-Policy">Privacy Policy</Link>
              </li>
              <li className="footer__h-nav-item">
                <Link className="footer__h-nav-link" to="https://bnax.zendesk.com/hc/en-us/articles/4416496720531-Cookies-Policy">Cookies Policy</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Footer
