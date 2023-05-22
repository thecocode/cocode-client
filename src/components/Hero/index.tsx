import { useMediaQuery } from '../../hooks';
import { ButtonTypes, ScreenTypes } from '../../types';
import { Button } from '../Button';

export function Hero() {
  const { screenType } = useMediaQuery();
  return (
    <div className='relative py-12'>
      <h1 className='w-[90%] flex items-center justify-center mx-auto mt-16'>
        <div className='absolute -z-10 mx-auto text-transparent'>CODE CONTRIBUTE COLLABORATE</div>
        <svg
          width='639'
          height='336'
          viewBox='0 0 639 336'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`${screenType !== ScreenTypes.MOBILE ? 'w-[50%]' : 'w-[90%]'}`}
        >
          <rect x='1' y='63' width='210' height='63' rx='31.5' fill='#F6EBFF' />
          <path
            d='M46.5 80C46.5 93.5 37.5 96 31.5 96C44.7 96 46.5 106 46.5 111C46.5 101 53.5 96 62.5 96C50.7769 96 46.5 88.5 46.5 80Z'
            fill='black'
            stroke='black'
          />
          <path
            d='M102.512 71.936C109.922 71.936 116.786 68.738 121.778 63.746L118.346 60.236C114.29 64.526 108.596 67.256 102.512 67.256C90.344 67.256 80.126 56.726 80.126 44.168C80.126 31.688 90.344 21.158 102.512 21.158C108.596 21.158 114.29 23.888 118.346 28.1L121.778 24.668C116.786 19.598 109.922 16.478 102.512 16.478C87.692 16.478 75.056 29.114 75.056 44.168C75.056 59.222 87.692 71.936 102.512 71.936ZM154.385 71.936C169.283 71.936 181.763 59.222 181.763 44.168C181.763 29.114 169.283 16.478 154.385 16.478C139.565 16.478 126.929 29.114 126.929 44.168C126.929 59.222 139.565 71.936 154.385 71.936ZM154.385 67.256C142.217 67.256 131.999 56.726 131.999 44.168C131.999 31.688 142.217 21.158 154.385 21.158C166.553 21.158 176.693 31.688 176.693 44.168C176.693 56.726 166.553 67.256 154.385 67.256ZM193.123 71H211.297C227.989 71 239.767 59.846 239.767 44.168C239.767 28.49 227.989 17.414 211.297 17.414H193.123V71ZM198.115 66.398V22.016H211.297C225.025 22.016 234.775 31.22 234.775 44.168C234.775 57.194 225.025 66.398 211.297 66.398H198.115ZM288.272 22.172V17.414H250.91V71H288.272V66.242H255.98V46.118H285.308V41.282H255.98V22.172H288.272Z'
            fill='black'
          />
          <path
            d='M31.512 277.936C38.922 277.936 45.786 274.738 50.778 269.746L47.346 266.236C43.29 270.526 37.596 273.256 31.512 273.256C19.344 273.256 9.126 262.726 9.126 250.168C9.126 237.688 19.344 227.158 31.512 227.158C37.596 227.158 43.29 229.888 47.346 234.1L50.778 230.668C45.786 225.598 38.922 222.478 31.512 222.478C16.692 222.478 4.056 235.114 4.056 250.168C4.056 265.222 16.692 277.936 31.512 277.936ZM83.385 277.936C98.283 277.936 110.763 265.222 110.763 250.168C110.763 235.114 98.283 222.478 83.385 222.478C68.565 222.478 55.929 235.114 55.929 250.168C55.929 265.222 68.565 277.936 83.385 277.936ZM83.385 273.256C71.217 273.256 60.999 262.726 60.999 250.168C60.999 237.688 71.217 227.158 83.385 227.158C95.553 227.158 105.693 237.688 105.693 250.168C105.693 262.726 95.553 273.256 83.385 273.256ZM125.087 272.242V223.414H120.095V277H154.883V272.242H125.087ZM167.819 272.242V223.414H162.827V277H197.615V272.242H167.819ZM250.02 277H255.48L231.846 223.414H226.386L202.752 277H208.212L213.75 264.364H244.482L250.02 277ZM215.934 259.528L229.116 229.576L242.298 259.528H215.934ZM265.326 277H290.13C299.412 277 306.042 270.916 306.042 262.336C306.042 256.486 302.298 251.416 296.292 248.686C300.972 246.346 303.936 242.446 303.936 236.752C303.936 228.952 297.852 223.414 289.194 223.414H265.326V277ZM270.318 246.658V228.016H288.102C294.42 228.016 298.866 231.916 298.866 237.298C298.866 242.758 294.576 246.658 288.414 246.658H270.318ZM270.318 272.398V251.26H289.038C296.058 251.26 300.972 255.628 300.972 261.79C300.972 267.952 296.058 272.398 289.038 272.398H270.318ZM341.989 277.936C356.887 277.936 369.367 265.222 369.367 250.168C369.367 235.114 356.887 222.478 341.989 222.478C327.169 222.478 314.533 235.114 314.533 250.168C314.533 265.222 327.169 277.936 341.989 277.936ZM341.989 273.256C329.821 273.256 319.603 262.726 319.603 250.168C319.603 237.688 329.821 227.158 341.989 227.158C354.157 227.158 364.297 237.688 364.297 250.168C364.297 262.726 354.157 273.256 341.989 273.256ZM420.897 240.34C420.897 230.434 412.551 223.414 401.553 223.414H379.557V277H384.549V257.188H400.071L414.033 277H419.805L405.609 256.876C414.579 255.394 420.897 248.998 420.897 240.34ZM384.549 228.172H400.695C409.665 228.172 415.905 232.852 415.905 240.34C415.905 247.75 409.665 252.43 400.695 252.43H384.549V228.172ZM473.584 277H479.044L455.41 223.414H449.95L426.316 277H431.776L437.314 264.364H468.046L473.584 277ZM439.498 259.528L452.68 229.576L465.862 259.528H439.498ZM498.834 277H503.826V228.172H522.39V223.414H480.27V228.172H498.834V277ZM569.415 228.172V223.414H532.053V277H569.415V272.242H537.123V252.118H566.451V247.282H537.123V228.172H569.415Z'
            fill='black'
          />
          <path
            d='M173.338 174.936C180.748 174.936 187.612 171.738 192.604 166.746L189.172 163.236C185.116 167.526 179.422 170.256 173.338 170.256C161.17 170.256 150.952 159.726 150.952 147.168C150.952 134.688 161.17 124.158 173.338 124.158C179.422 124.158 185.116 126.888 189.172 131.1L192.604 127.668C187.612 122.598 180.748 119.478 173.338 119.478C158.518 119.478 145.882 132.114 145.882 147.168C145.882 162.222 158.518 174.936 173.338 174.936ZM225.211 174.936C240.109 174.936 252.589 162.222 252.589 147.168C252.589 132.114 240.109 119.478 225.211 119.478C210.391 119.478 197.755 132.114 197.755 147.168C197.755 162.222 210.391 174.936 225.211 174.936ZM225.211 170.256C213.043 170.256 202.825 159.726 202.825 147.168C202.825 134.688 213.043 124.158 225.211 124.158C237.379 124.158 247.519 134.688 247.519 147.168C247.519 159.726 237.379 170.256 225.211 170.256ZM263.949 174H268.941V128.526L303.261 174H308.253V120.414H303.261V165.888L268.941 120.414H263.949V174ZM337.648 174H342.64V125.172H361.204V120.414H319.084V125.172H337.648V174ZM412.207 137.34C412.207 127.434 403.861 120.414 392.863 120.414H370.867V174H375.859V154.188H391.381L405.343 174H411.115L396.919 153.876C405.889 152.394 412.207 145.998 412.207 137.34ZM375.859 125.172H392.005C400.975 125.172 407.215 129.852 407.215 137.34C407.215 144.75 400.975 149.43 392.005 149.43H375.859V125.172ZM421.293 174H426.285V120.414H421.293V174ZM439.754 174H464.558C473.84 174 480.47 167.916 480.47 159.336C480.47 153.486 476.726 148.416 470.72 145.686C475.4 143.346 478.364 139.446 478.364 133.752C478.364 125.952 472.28 120.414 463.622 120.414H439.754V174ZM444.746 143.658V125.016H462.53C468.848 125.016 473.294 128.916 473.294 134.298C473.294 139.758 469.004 143.658 462.842 143.658H444.746ZM444.746 169.398V148.26H463.466C470.486 148.26 475.4 152.628 475.4 158.79C475.4 164.952 470.486 169.398 463.466 169.398H444.746ZM513.452 174.936C526.244 174.936 535.292 165.576 535.292 152.316V120.414H530.3V152.316C530.3 162.846 523.28 170.334 513.452 170.334C503.624 170.334 496.604 162.846 496.604 152.316V120.414H491.612V152.316C491.612 165.576 500.66 174.936 513.452 174.936ZM564.107 174H569.099V125.172H587.663V120.414H545.543V125.172H564.107V174ZM634.688 125.172V120.414H597.326V174H634.688V169.242H602.396V149.118H631.724V144.282H602.396V125.172H634.688Z'
            fill='black'
          />
          <rect x='355' y='273' width='210' height='63' rx='31.5' fill='#FFF9EB' />
          <line x1='508' y1='306.5' x2='419' y2='306.5' stroke='black' />
          <path
            d='M506 318V293C511.51 293 521 294.829 521 305.195C521 315.561 512.735 318 506 318Z'
            fill='black'
            stroke='black'
          />
        </svg>
      </h1>
      <p className='font-lato w-[80%] ml:w-[40%] text-[1.1rem] text-center my-8 mx-auto'>
        Join a community of tech enthusiasts who share your passion for coding and find ways to make
        meaningful contributions
      </p>
      <Button type={ButtonTypes.DISCORD} link='' />
    </div>
  );
}
