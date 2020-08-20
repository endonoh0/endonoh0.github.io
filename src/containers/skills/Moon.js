import React, { useRef } from 'react'
import "./moon.scss";

function Moon(props) {

  const scrollToRef = (ref) => window.scrollTo(0, 1700, 'smooth')
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div id="contain-all-moon" ref={myRef} onClick={executeScroll} >
      <svg viewBox="0 0 400 400" width="100%" height="100%">
        <g id="moon-group">
          <g id="aura-group" fill="#EBEBEB" fill-opacity=".16">
            <path d="M90.138 200c0-60.634 49.228-109.862 109.862-109.862 60.634 0 109.862 49.228 109.862 109.862 0 60.634-49.228 109.862-109.862 109.862-60.634 0-109.862-49.228-109.862-109.862z" id="aura-1" />
            <path d="M70.638 200c0-71.397 57.965-129.362 129.362-129.362 71.397 0 129.362 57.965 129.362 129.362 0 71.397-57.965 129.362-129.362 129.362-71.397 0-129.362-57.965-129.362-129.362z" id="aura-2" />
            <path d="M51.333 200c0-82.051 66.616-148.667 148.667-148.667S348.667 117.949 348.667 200 282.051 348.667 200 348.667 51.333 282.051 51.333 200z" id="aura-3" />
          </g>

      <radialGradient id="_rgradient_0" fx=".5" fy=".5" cx=".5" cy=".5" r=".5" gradientTransform="translate(107.867 107.867) scale(184.265)" gradientUnits="userSpaceOnUse">
            <stop offset="88.69218161%" stop-color="#ffe" />
            <stop offset="100%" stop-color="#ffe" />
          </radialGradient>
          <path d="M107.867 200c0-50.849 41.284-92.133 92.133-92.133s92.133 41.284 92.133 92.133-41.284 92.133-92.133 92.133-92.133-41.284-92.133-92.133z" id="moon" fill="" />

      <g id="crater-group" fill="#D9D9BE">
            <path d="M228.897 143.209c0-2.827 2.295-5.122 5.122-5.122s5.122 2.295 5.122 5.122-2.295 5.122-5.122 5.122-5.122-2.295-5.122-5.122z" id="crater-1" />
            <path d="M217.866 197.184c0-6.088 4.943-11.031 11.031-11.031 6.089 0 11.032 4.943 11.032 11.031 0 6.088-4.943 11.031-11.032 11.031-6.088 0-11.031-4.943-11.031-11.031z" id="crater-2" />
            <path d="M239.929 218.065c0-11.525 9.356-20.881 20.881-20.881 11.524 0 20.88 9.356 20.88 20.881 0 11.524-9.356 20.881-20.88 20.881-11.525 0-20.881-9.357-20.881-20.881z" id="crater-3" />
            <path d="M202.895 245.643c0-11.524 9.356-20.881 20.881-20.881 11.524 0 20.881 9.357 20.881 20.881 0 11.525-9.357 20.881-20.881 20.881-11.525 0-20.881-9.356-20.881-20.881z" id="crater-4" />
          </g>
        </g>

        {/* <g id="mountain-group">
          <path d="M296.02 340.854l11.631-20.145 19.014 32.932 19.013 32.932H78.165l19.013-32.932 19.014-32.932 11.631 20.145 7.508-16.143 4.818 10.357 17.974-38.644 20.966 45.074 7.017 15.085 14.228-24.644 15.771 27.317 11.292 19.558 17.357-37.316 20.966-45.074 17.974 38.644 4.817-10.357 7.509 16.143z" id="mountain-5" fill="#171717" />
          <path d="M389.876 350.054l11.992-22.008 19.603 35.977L441.075 400H165.257l19.603-35.977 19.604-35.977 11.992 22.008 7.742-17.636 4.967 11.315 18.532-42.217 21.617 49.242 7.234 16.48 14.67-26.923 16.261 29.843 11.643 21.366 17.895-40.766 21.617-49.242 18.533 42.217 4.967-11.315 7.742 17.636z" id="mountain-4" fill="#171717" />
          <path d="M0 400h97.178l-19.603-96.75-19.604-96.749-11.992 59.183-7.742-47.426-4.967 30.427-18.533-113.529L0 225.437V400z" id="mountain-3" fill="#171717" />
          <path d="M400 400H296.02l20.976-79.41 20.976-79.41 12.831 48.577 8.284-38.927 5.314 24.974 19.83-93.182 15.769 74.1V400z" id="mountain-2" fill="#171717" />
          <path d="M325.749 331.638l17.391-30.122 28.43 49.242L400 400H0l28.43-49.242 28.43-49.242 17.391 30.122L85.478 307.5l7.204 15.486 26.876-57.782 31.349 67.398 10.492 22.556 21.275-36.849 23.582 40.845 16.884 29.244 25.953-55.796 31.349-67.398 26.876 57.782 7.204-15.486 11.227 24.138z" id="mountain-1" fill="#000" />
        </g> */}
      </svg>
    </div>
  );
}

const MemoMoon = React.memo(Moon);
export default MemoMoon;
