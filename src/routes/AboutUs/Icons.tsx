import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { BaseButton } from '../../components/Button/index';
export function LeftArrow1() {
    const { screenType } = useMediaQuery();
    return (
            <span className="block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none"
                    className={`
                    ${screenType === ScreenTypes.TABLET ? "w-[17.718px] h-[13.629px]" : null}
                    `}
                    >
  <path d="M23.7396 1.85805C23.7319 1.8425 23.719 1.83032 23.7033 1.82368C21.8879 0.964724 19.9721 0.352223 18.0039 0.00150237C17.986 -0.00192585 17.9676 0.00054731 17.9511 0.00857012C17.9347 0.0165929 17.9211 0.0297569 17.9123 0.04619C17.6515 0.534458 17.4147 1.03599 17.2028 1.54887C15.0812 1.21675 12.9232 1.21675 10.8016 1.54887C10.5883 1.03469 10.3477 0.533031 10.0808 0.04619C10.0717 0.0301141 10.0581 0.0172532 10.0417 0.00928254C10.0254 0.00131184 10.0071 -0.00139929 9.98922 0.00150237C8.02082 0.351487 6.10493 0.964034 4.28977 1.82373C4.27423 1.83052 4.26112 1.84212 4.25225 1.85692C0.622281 7.4472 -0.372103 12.9 0.115708 18.2853C0.11708 18.2985 0.121013 18.3113 0.127271 18.3229C0.133529 18.3345 0.141985 18.3447 0.152137 18.3528C2.26583 19.9668 4.63003 21.1987 7.14383 21.9961C7.16153 22.0015 7.18044 22.0013 7.198 21.9954C7.21556 21.9894 7.23094 21.9781 7.24207 21.9629C7.78198 21.2053 8.26038 20.4031 8.6724 19.5644C8.67807 19.5529 8.6813 19.5402 8.68189 19.5274C8.68248 19.5145 8.68041 19.5016 8.67583 19.4896C8.67124 19.4776 8.66425 19.4667 8.65529 19.4577C8.64634 19.4487 8.63563 19.4417 8.62388 19.4373C7.86948 19.1396 7.13913 18.7808 6.43968 18.3641C6.42698 18.3564 6.41631 18.3456 6.40861 18.3327C6.40092 18.3197 6.39644 18.305 6.39557 18.2898C6.3947 18.2746 6.39746 18.2595 6.40362 18.2457C6.40978 18.2319 6.41914 18.2198 6.43087 18.2106C6.57764 18.0972 6.72449 17.9793 6.86464 17.8602C6.87709 17.8496 6.89215 17.8428 6.90814 17.8406C6.92412 17.8384 6.94039 17.8408 6.95511 17.8476C11.5375 20.0042 16.4985 20.0042 21.0266 17.8476C21.0413 17.8403 21.0578 17.8376 21.074 17.8396C21.0902 17.8416 21.1056 17.8484 21.1182 17.859C21.2584 17.9782 21.4052 18.0972 21.5531 18.2106C21.5649 18.2197 21.5743 18.2317 21.5806 18.2454C21.5868 18.2592 21.5897 18.2743 21.5889 18.2895C21.5882 18.3047 21.5838 18.3194 21.5762 18.3324C21.5686 18.3455 21.558 18.3563 21.5454 18.3641C20.8475 18.7843 20.1165 19.1429 19.3601 19.4362C19.3484 19.4408 19.3377 19.4479 19.3288 19.457C19.3199 19.4662 19.313 19.4772 19.3085 19.4893C19.304 19.5014 19.302 19.5143 19.3027 19.5273C19.3034 19.5402 19.3067 19.5528 19.3125 19.5644C19.7314 20.3984 20.2091 21.1996 20.7417 21.9615C20.7525 21.9772 20.7678 21.9889 20.7855 21.9951C20.8031 22.0012 20.8222 22.0015 20.84 21.9959C23.3583 21.2013 25.7266 19.9692 27.843 18.3528C27.8533 18.3451 27.8618 18.3352 27.8681 18.3237C27.8744 18.3123 27.8782 18.2996 27.8794 18.2865C28.4634 12.0605 26.9017 6.65235 23.7396 1.85805ZM9.35674 15.0062C7.97712 15.0062 6.84035 13.7006 6.84035 12.0972C6.84035 10.4937 7.95507 9.188 9.35674 9.188C10.7694 9.188 11.8951 10.5051 11.8731 12.0971C11.8731 13.7006 10.7583 15.0062 9.35674 15.0062ZM18.6606 15.0062C17.281 15.0062 16.1442 13.7006 16.1442 12.0972C16.1442 10.4937 17.259 9.188 18.6606 9.188C20.0733 9.188 21.199 10.5051 21.177 12.0971C21.177 13.7006 20.0733 15.0062 18.6606 15.0062Z" fill="black"/>
</svg>
            </span>
    )
}

export function LeftArrow2() {
    const { screenType } = useMediaQuery();
    return (
        <span className="block">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none"
className={`
${screenType === ScreenTypes.TABLET ? "w-[17.718px] h-[13.629px]" : null}
`}
>
  <path d="M25.1219 5.73201C25.1397 5.98356 25.1397 6.23517 25.1397 6.48672C25.1397 14.1593 19.3656 23 8.81221 23C5.56092 23 2.54063 22.0476 0 20.3946C0.461947 20.4484 0.906066 20.4664 1.38579 20.4664C4.06849 20.4664 6.53808 19.55 8.51017 17.9867C5.98732 17.9328 3.87309 16.2617 3.14465 13.9617C3.50001 14.0156 3.85532 14.0515 4.22845 14.0515C4.74367 14.0515 5.25893 13.9796 5.7386 13.8539C3.10916 13.3148 1.13701 10.9789 1.13701 8.1578V8.08595C1.90095 8.51721 2.78935 8.78673 3.73091 8.82263C2.18521 7.78042 1.17256 6.00154 1.17256 3.98902C1.17256 2.91092 1.45677 1.92264 1.95427 1.06013C4.77916 4.582 9.02539 6.88196 13.7868 7.13357C13.698 6.70232 13.6446 6.25314 13.6446 5.80391C13.6446 2.60544 16.203 0 19.3832 0C21.0355 0 22.5279 0.700779 23.5761 1.83281C24.8731 1.58126 26.1167 1.09608 27.2183 0.431253C26.7918 1.77894 25.8858 2.91097 24.6954 3.62967C25.8503 3.50395 26.9696 3.18044 28 2.73127C27.2184 3.88122 26.2412 4.9054 25.1219 5.73201Z" fill="black"/>
</svg>
            </span>
    )
}

export function LeftArrow3() {
    const { screenType } = useMediaQuery();
    return (
        <span className="block">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
className={`
${screenType === ScreenTypes.TABLET ? "w-[17.718px] h-[13.629px]" : null}
`}
>
  <path d="M9.36532 22.5456C9.36532 22.6614 9.23548 22.754 9.07177 22.754C8.88548 22.7714 8.75564 22.6787 8.75564 22.5456C8.75564 22.4298 8.88548 22.3371 9.04919 22.3371C9.21855 22.3198 9.36532 22.4124 9.36532 22.5456ZM7.60968 22.285C7.57016 22.4008 7.68306 22.534 7.85242 22.5687C7.99919 22.6266 8.16855 22.5687 8.20242 22.4529C8.23629 22.3371 8.12903 22.204 7.95968 22.1518C7.8129 22.1113 7.64919 22.1692 7.60968 22.285ZM10.1048 22.1866C9.94113 22.2271 9.82823 22.3371 9.84516 22.4703C9.8621 22.5861 10.0089 22.6614 10.1782 22.6208C10.3419 22.5803 10.4548 22.4703 10.4379 22.3545C10.421 22.2445 10.2685 22.1692 10.1048 22.1866ZM13.8194 0C5.98952 0 0 6.09668 0 14.1272C0 20.5481 3.94032 26.0426 9.56855 27.9764C10.2911 28.1096 10.5452 27.6522 10.5452 27.2758C10.5452 26.9169 10.5282 24.9368 10.5282 23.7209C10.5282 23.7209 6.57661 24.5894 5.74677 21.9955C5.74677 21.9955 5.10323 20.3107 4.17742 19.8764C4.17742 19.8764 2.88468 18.9674 4.26774 18.9848C4.26774 18.9848 5.67339 19.1006 6.44677 20.4786C7.68306 22.7135 9.75484 22.0708 10.5621 21.6887C10.6919 20.7623 11.0589 20.1196 11.4653 19.7375C8.30968 19.3785 5.12581 18.9096 5.12581 13.3397C5.12581 11.7475 5.55484 10.9485 6.45806 9.92954C6.31129 9.5532 5.83145 8.00153 6.60484 5.99825C7.78468 5.62191 10.5 7.5615 10.5 7.5615C11.629 7.23728 12.8427 7.06937 14.0452 7.06937C15.2476 7.06937 16.4613 7.23728 17.5903 7.5615C17.5903 7.5615 20.3056 5.61613 21.4855 5.99825C22.2589 8.00732 21.779 9.5532 21.6323 9.92954C22.5355 10.9543 23.0887 11.7533 23.0887 13.3397C23.0887 18.9269 19.7637 19.3727 16.6081 19.7375C17.1274 20.1949 17.5677 21.0634 17.5677 22.424C17.5677 24.3751 17.5508 26.7895 17.5508 27.2643C17.5508 27.6406 17.8105 28.098 18.5274 27.9648C24.1726 26.0426 28 20.5481 28 14.1272C28 6.09668 21.6492 0 13.8194 0ZM5.4871 19.9691C5.41371 20.027 5.43064 20.1602 5.52661 20.2702C5.61694 20.3628 5.74677 20.4033 5.82016 20.3281C5.89355 20.2702 5.87661 20.137 5.78064 20.027C5.69032 19.9343 5.56048 19.8938 5.4871 19.9691ZM4.87742 19.5001C4.8379 19.5754 4.89435 19.668 5.00726 19.7259C5.09758 19.7838 5.21048 19.7664 5.25 19.6854C5.28952 19.6101 5.23306 19.5175 5.12016 19.4596C5.00726 19.4248 4.91694 19.4422 4.87742 19.5001ZM6.70645 21.5613C6.61613 21.6366 6.65 21.8103 6.77984 21.9203C6.90968 22.0534 7.07339 22.0708 7.14677 21.9782C7.22016 21.9029 7.18629 21.7292 7.07339 21.6192C6.94919 21.486 6.77984 21.4687 6.70645 21.5613ZM6.0629 20.7102C5.97258 20.7681 5.97258 20.9186 6.0629 21.0518C6.15323 21.1849 6.30564 21.2428 6.37903 21.1849C6.46935 21.1097 6.46935 20.9591 6.37903 20.826C6.3 20.6928 6.15323 20.6349 6.0629 20.7102Z" fill="black"/>
</svg>
            </span>
    )
}

export function LeftArrow4() {
    const { screenType } = useMediaQuery();
    return (
        <span className="block">
<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"
className={`
${screenType === ScreenTypes.TABLET ? "w-[17.718px] h-[13.629px]" : null}
`}
>
  <path d="M14.0031 6.82115C10.0303 6.82115 6.82588 10.0263 6.82588 14C6.82588 17.9737 10.0303 21.1788 14.0031 21.1788C17.9759 21.1788 21.1804 17.9737 21.1804 14C21.1804 10.0263 17.9759 6.82115 14.0031 6.82115ZM14.0031 18.6672C11.4358 18.6672 9.33698 16.5741 9.33698 14C9.33698 11.4259 11.4296 9.33281 14.0031 9.33281C16.5767 9.33281 18.6693 11.4259 18.6693 14C18.6693 16.5741 16.5704 18.6672 14.0031 18.6672ZM23.148 6.5275C23.148 7.45844 22.3984 8.20194 21.474 8.20194C20.5432 8.20194 19.7999 7.45219 19.7999 6.5275C19.7999 5.60281 20.5495 4.85306 21.474 4.85306C22.3984 4.85306 23.148 5.60281 23.148 6.5275ZM27.9016 8.22693C27.7954 5.98393 27.2832 3.9971 25.6404 2.36015C24.0038 0.723195 22.0174 0.210867 19.7749 0.0984045C17.4637 -0.0328015 10.5363 -0.0328015 8.2251 0.0984045C5.98885 0.204619 4.00245 0.716947 2.35962 2.3539C0.716788 3.99085 0.21082 5.97769 0.0983826 8.22069C-0.0327942 10.5324 -0.0327942 17.4613 0.0983826 19.7731C0.204573 22.0161 0.716788 24.0029 2.35962 25.6399C4.00245 27.2768 5.9826 27.7891 8.2251 27.9016C10.5363 28.0328 17.4637 28.0328 19.7749 27.9016C22.0174 27.7954 24.0038 27.2831 25.6404 25.6399C27.277 24.0029 27.7892 22.0161 27.9016 19.7731C28.0328 17.4613 28.0328 10.5387 27.9016 8.22693ZM24.9158 22.2535C24.4286 23.4781 23.4853 24.4215 22.2548 24.9151C20.412 25.6461 16.0395 25.4774 14.0031 25.4774C11.9668 25.4774 7.58795 25.6399 5.75148 24.9151C4.52716 24.4278 3.58394 23.4843 3.09046 22.2535C2.35962 20.4104 2.52828 16.0368 2.52828 14C2.52828 11.9632 2.36587 7.5834 3.09046 5.74651C3.57769 4.52192 4.52091 3.57849 5.75148 3.0849C7.5942 2.3539 11.9668 2.52259 14.0031 2.52259C16.0395 2.52259 20.4183 2.36015 22.2548 3.0849C23.4791 3.57224 24.4223 4.51568 24.9158 5.74651C25.6466 7.58965 25.478 11.9632 25.478 14C25.478 16.0368 25.6466 20.4166 24.9158 22.2535Z" fill="black"/>
</svg>
            </span>
    )
}