const darkModeCSS = `
/* Base colors and backgrounds */
body, nav, .joJglb, .ETRkCe, .KEDCCd, .rknsod, .DMZ54e, .VfPpkd-P5QLlc, .VfPpkd-OJnkse {
    background-color: #1b1b1b !important;
    color: #fff;
}

/* Text colors */
*, h2, a, p, .apFsO.onkcGd, .apFsO.onkcGd:visited, .K6Ovqd, .Evt7cb, .Evt7cb:visited, .WOPwXe, 
.ViCi4, .tLDEHd, .dDKhVc, .asQXV, .rpo4wf, .wZTANe .J1raN:hover, .EZrbnd, .IqJTee, 
.A6dC2c, .NjE5zd, .xSP5ic, .Rq5Gcb, .ksaOtd, .YVvGBb.A6dC2c-J3yWx.Pce5Kb {
    color: #fff;
}

/* Secondary text colors */
.oBSRLe, .Lzdwhd-BrZSOd, .lziZub, .lziZub:visited, .YVvGBb.dDKhVc.Pce5Kb {
    color: #8d8d8d;
}

.udxSmc, .xSP5ic {
    color: #ffffff5a;
}

.neggzd {
    color: #ffffff1a;
}

/* Borders */
.s2g3Xd, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .PeGHgb.Q8U8uc .ruTJle+.fETHd, .ar1wE .eqqrO, 
.ySjuvd .eqqrO, .E5f6Vd, .ZNE4y, .ycbm1d, .LKqFXc, .P02DYb, .tUJKGd:not(:first-child), 
.O9YpHb {
    border-top: .0625rem solid #373737;
}

.joJglb, .u73Apc, .MHxtic:not(:last-child) {
    border-bottom: .0625rem solid #373737;
}

.oleV8d, .BEAGS:hover, .BEAGS, .Xp0OCe, .QTD2uf {
    border: .0625rem solid #373737;
}

.BOW64 {
    border-right: .0625rem solid #373737;
}

/* Background colors */
.Aopndd, .d4Fe0d, .GWZ7yf, .hgjBDc, .Xi8cpb:hover .LlcfK, .JPdR6b {
    background-color: #212121;
    border: .0625rem solid #373737;
    box-shadow: none;
}

.qhnNic.LBlAUc.Aopndd.TIunU.xWw7yd.h7Ww0.DkDwHe:hover {
    background-color: #2C2C2C;
}

.VfPpkd-rymPhb-clz4Ic.e6pQl.s28puc {
    background-color: #ffffff1a;
}

.VfPpkd-rymPhb-ibnC6b.VfPpkd-rymPhb-ibnC6b-OWXEXe-gk6SMd {
    background-color: rgb(48, 45, 45) !important;
}

/* Special elements */
.bFjUmb-Ysl7Fe {
    background-color: rgb(32, 42, 68) !important;
    z-index: -1;
}

.DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE).iWO5td,
.DShyMc-MTg0MjQ2MDIxMDky .ybOdnf:not(.RDPZE) .OA0qNb .LMgvRb[aria-selected="true"],
.DShyMc-MTg0MjQ2MDIxMDky .NqFm6:not(.RDPZE) .tWfTvb [role="option"][aria-selected="true"] {
    background-color: #4242425a;
}

/* Status colors */
.vzcr8, .EhRlC {
    color: #f48fb1;
}

.lYU7F {
    color: #f44336;
}

/* Shadows */
.hVNH5c, .ncFHed, .EHzcec, .joJglb.kLHn3 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

/* Remove borders and backgrounds */
.SZ0kZe, .WMQb5e .oBSRLe, .MHxtic.ndcsBf, .d4Fe0d.s3BYNe {
    border: none;
}

.rZXyy.YwNp1, .rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):hover,
.rZXyy:not(.u0dx8e):not(.ILo0B):not(.xp2dJ):focus, .MHxtic.ndcsBf {
    box-shadow: none;
}

/* Misc spacing */
.gHz6xd {
    margin: .0625rem 1.5625rem 1.5625rem .0625rem;
}

.Xp0OCe {
    border-radius: 0.25rem;
}

/* Text opacity */
.VfPpkd-rymPhb-fpDzbe-fmcmS {
    color: rgba(255, 255, 255, 0.8) !important;
}

.VfPpkd-uusGie-fmcmS {
    color: #fff !important;
}

.VfPpkd-vQzf8d {
    color: inherit !important;
}
`;
function createToggleButton() {
  const button = document.createElement("button");
  button.id = "dark-mode-toggle";
  button.title = "Toggle Dark Mode";

  const savedState = localStorage.getItem("googleClassroomDarkMode");
  if (savedState === "enabled") {
    button.innerHTML = `Toggle Light Mode <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;
    enableDarkMode();
    button.classList.add("active");
  } else {
    button.innerHTML = `Toggle Dark Mode <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
  }

  document.body.appendChild(button);

  button.addEventListener("click", toggleDarkMode);
}

let darkModeEnabled = false;

function enableDarkMode() {
  const styleElement = document.createElement("style");
  styleElement.id = "google-classroom-darkmode";
  styleElement.textContent = darkModeCSS;

  if (document.body) {
    document.body.appendChild(styleElement);
  } else {
    document.head.appendChild(styleElement);
  }

  darkModeEnabled = true;
  localStorage.setItem("googleClassroomDarkMode", "enabled");
}

function disableDarkMode() {
  const darkModeStyles = document.querySelectorAll(
    "#google-classroom-darkmode"
  );
  darkModeStyles.forEach((element) => element.remove());

  darkModeEnabled = false;
  localStorage.removeItem("googleClassroomDarkMode");
}

function toggleDarkMode() {
  const button = document.getElementById("dark-mode-toggle");

  if (darkModeEnabled) {
    disableDarkMode();
    button.classList.remove("active");
    button.innerHTML = `Toggle Dark Mode <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`;
  } else {
    enableDarkMode();
    button.classList.add("active");
    button.innerHTML = `Toggle Light Mode <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>`;
  }
}

if (document.readyState === "complete") {
  createToggleButton();
} else {
  window.addEventListener("load", createToggleButton);
}
