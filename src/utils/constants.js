const ICONS = {
  arrows: 'M4.99028 5.66866C4.884 5.55938 4.73866 5.4968 4.58623 5.49468C4.43381 5.49257 4.28679 5.55109 4.17751 5.65737C4.06823 5.76365 4.00565 5.90899 4.00354 6.06142C4.00142 6.21384 4.05994 6.36086 4.16622 6.47014L5.48697 7.76267L4.16622 9.0552C4.11332 9.10767 4.07133 9.17009 4.04268 9.23887C4.01402 9.30765 3.99927 9.38143 3.99927 9.45594C3.99927 9.53045 4.01402 9.60422 4.04268 9.673C4.07133 9.74178 4.11332 9.80421 4.16622 9.85668C4.21869 9.90958 4.28112 9.95157 4.3499 9.98023C4.41868 10.0089 4.49245 10.0236 4.56696 10.0236C4.64147 10.0236 4.71525 10.0089 4.78403 9.98023C4.85281 9.95157 4.91523 9.90958 4.9677 9.85668L6.66097 8.16341C6.71388 8.11094 6.75587 8.04851 6.78452 7.97973C6.81318 7.91095 6.82793 7.83718 6.82793 7.76267C6.82793 7.68816 6.81318 7.61438 6.78452 7.5456C6.75587 7.47682 6.71388 7.4144 6.66097 7.36193L4.99028 5.66866ZM9.78788 7.36193L8.09461 5.66866C7.98833 5.56238 7.84417 5.50267 7.69387 5.50267C7.54356 5.50267 7.39941 5.56238 7.29313 5.66866C7.18684 5.77494 7.12714 5.91909 7.12714 6.0694C7.12714 6.21971 7.18684 6.36386 7.29313 6.47014L8.5913 7.76267L7.29313 9.0552C7.24022 9.10767 7.19823 9.17009 7.16958 9.23887C7.14092 9.30765 7.12617 9.38143 7.12617 9.45594C7.12617 9.53045 7.14092 9.60422 7.16958 9.673C7.19823 9.74178 7.24022 9.80421 7.29313 9.85668C7.3456 9.90958 7.40802 9.95157 7.4768 9.98023C7.54558 10.0089 7.61936 10.0236 7.69387 10.0236C7.76838 10.0236 7.84215 10.0089 7.91093 9.98023C7.97971 9.95157 8.04214 9.90958 8.09461 9.85668L9.78788 8.16341C9.84228 8.11244 9.88606 8.05121 9.91667 7.98323C9.94728 7.91526 9.96412 7.84189 9.96622 7.76737C9.96831 7.69286 9.95563 7.61866 9.9289 7.54907C9.90216 7.47948 9.86191 7.41587 9.81045 7.36193H9.78788Z',
  direction: 'M7 6V11C7 11.2652 7.10536 11.5196 7.29289 11.7071C7.48043 11.8946 7.73478 12 8 12H11V20H9C8.73478 20 8.48043 20.1054 8.29289 20.2929C8.10536 20.4804 8 20.7348 8 21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H15C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21C16 20.7348 15.8946 20.4804 15.7071 20.2929C15.5196 20.1054 15.2652 20 15 20H13V12H18C18.1494 12.0005 18.297 11.9675 18.432 11.9035C18.567 11.8395 18.6859 11.746 18.78 11.63L20.78 9.13C20.922 8.95264 20.9994 8.73221 20.9994 8.505C20.9994 8.27779 20.922 8.05736 20.78 7.88L18.78 5.38C18.6869 5.26215 18.5684 5.16679 18.4334 5.101C18.2983 5.03521 18.1502 5.00069 18 5H13V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V5H8C7.73478 5 7.48043 5.10536 7.29289 5.29289C7.10536 5.48043 7 5.73478 7 6ZM9 7H17.52L18.72 8.5L17.52 10H9V7Z',
  location: 'M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 15.4 11.05 21.5 11.35 21.76C11.5311 21.9149 11.7616 22.0001 12 22.0001C12.2384 22.0001 12.4689 21.9149 12.65 21.76C13 21.5 20 15.4 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2ZM12 19.65C9.87 17.65 6 13.34 6 10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10C18 13.34 14.13 17.66 12 19.65ZM12 6C11.2089 6 10.4355 6.2346 9.77772 6.67412C9.11992 7.11365 8.60723 7.73836 8.30448 8.46927C8.00173 9.20017 7.92252 10.0044 8.07686 10.7804C8.2312 11.5563 8.61216 12.269 9.17157 12.8284C9.73098 13.3878 10.4437 13.7688 11.2196 13.9231C11.9956 14.0775 12.7998 13.9983 13.5307 13.6955C14.2616 13.3928 14.8864 12.8801 15.3259 12.2223C15.7654 11.5645 16 10.7911 16 10C16 8.93913 15.5786 7.92172 14.8284 7.17157C14.0783 6.42143 13.0609 6 12 6ZM12 12C11.6044 12 11.2178 11.8827 10.8889 11.6629C10.56 11.4432 10.3036 11.1308 10.1522 10.7654C10.0009 10.3999 9.96126 9.99778 10.0384 9.60982C10.1156 9.22186 10.3061 8.86549 10.5858 8.58579C10.8655 8.30608 11.2219 8.1156 11.6098 8.03843C11.9978 7.96126 12.3999 8.00087 12.7654 8.15224C13.1308 8.30362 13.4432 8.55996 13.6629 8.88886C13.8827 9.21776 14 9.60444 14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12Z',
  train: 'M18.5 2H6.5C5.70435 2 4.94129 2.31607 4.37868 2.87868C3.81607 3.44129 3.5 4.20435 3.5 5V17C3.50174 17.6189 3.69488 18.2222 4.05294 18.7271C4.411 19.2319 4.91645 19.6137 5.5 19.82V21C5.5 21.2652 5.60536 21.5196 5.79289 21.7071C5.98043 21.8946 6.23478 22 6.5 22C6.76522 22 7.01957 21.8946 7.20711 21.7071C7.39464 21.5196 7.5 21.2652 7.5 21V20H17.5V21C17.5 21.2652 17.6054 21.5196 17.7929 21.7071C17.9804 21.8946 18.2348 22 18.5 22C18.7652 22 19.0196 21.8946 19.2071 21.7071C19.3946 21.5196 19.5 21.2652 19.5 21V19.82C20.0835 19.6137 20.589 19.2319 20.9471 18.7271C21.3051 18.2222 21.4983 17.6189 21.5 17V5C21.5 4.20435 21.1839 3.44129 20.6213 2.87868C20.0587 2.31607 19.2956 2 18.5 2ZM5.5 8H11.5V12H5.5V8ZM19.5 17C19.5 17.2652 19.3946 17.5196 19.2071 17.7071C19.0196 17.8946 18.7652 18 18.5 18H6.5C6.23478 18 5.98043 17.8946 5.79289 17.7071C5.60536 17.5196 5.5 17.2652 5.5 17V14H19.5V17ZM19.5 12H13.5V8H19.5V12ZM19.5 6H5.5V5C5.5 4.73478 5.60536 4.48043 5.79289 4.29289C5.98043 4.10536 6.23478 4 6.5 4H18.5C18.7652 4 19.0196 4.10536 19.2071 4.29289C19.3946 4.48043 19.5 4.73478 19.5 5V6ZM16.12 16.92C16.2402 16.9712 16.3693 16.9984 16.5 17C16.7652 17 17.0196 16.8946 17.2071 16.7071C17.3946 16.5196 17.5 16.2652 17.5 16C17.5049 15.9334 17.5049 15.8666 17.5 15.8C17.4891 15.7374 17.4688 15.6767 17.44 15.62C17.4181 15.5563 17.3878 15.4957 17.35 15.44C17.3131 15.3876 17.273 15.3375 17.23 15.29L17.08 15.17C17.0243 15.1322 16.9637 15.1019 16.9 15.08C16.8383 15.0422 16.7707 15.0152 16.7 15C16.5378 14.9661 16.3698 14.973 16.2109 15.0201C16.0521 15.0673 15.9074 15.1531 15.79 15.27C15.747 15.3175 15.7069 15.3676 15.67 15.42C15.6322 15.4757 15.6019 15.5363 15.58 15.6C15.5512 15.6567 15.5309 15.7174 15.52 15.78C15.5151 15.8466 15.5151 15.9134 15.52 15.98C15.5211 16.2423 15.6253 16.4937 15.81 16.68C15.8965 16.7797 16.0018 16.8612 16.12 16.92ZM8.12 16.92C8.24022 16.9712 8.36932 16.9984 8.5 17C8.76522 17 9.01957 16.8946 9.20711 16.7071C9.39464 16.5196 9.5 16.2652 9.5 16C9.50491 15.9334 9.50491 15.8666 9.5 15.8C9.48905 15.7374 9.46883 15.6767 9.44 15.62C9.41811 15.5563 9.38785 15.4957 9.35 15.44C9.31308 15.3876 9.27301 15.3375 9.23 15.29L9.08 15.17L8.9 15.08L8.7 15C8.53782 14.9661 8.36976 14.973 8.21092 15.0201C8.05208 15.0673 7.90744 15.1531 7.79 15.27C7.74699 15.3175 7.70692 15.3676 7.67 15.42C7.63215 15.4757 7.60189 15.5363 7.58 15.6C7.55117 15.6567 7.53095 15.7174 7.52 15.78C7.51509 15.8466 7.51509 15.9134 7.52 15.98C7.5211 16.2423 7.62526 16.4937 7.81 16.68C7.89649 16.7797 8.00184 16.8612 8.12 16.92Z',
};

export default ICONS;
