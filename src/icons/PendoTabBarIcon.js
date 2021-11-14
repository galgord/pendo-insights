import React from 'react';
import { View } from 'react-native';
import Svg, { Path,Rect } from 'react-native-svg';

const PendoTabBarIcon = ({iconName, style}) => {
    switch (iconName){
        case 'GuideSelected':
            return (
                <View style={style}>
                    <Svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M3 15C1.34315 15 0 13.6569 0 12V3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V12C22 13.6569 20.6569 15 19 15H15.7875L11.5453 17.8317C11.2061 18.0582 10.7633 18.0559 10.4264 17.8259L6.28662 15H3Z" fill="#2A2C35"/>
                    </Svg>
                </View>
            )
        case 'GuidesNotSelected':
            return (
                <View style={style}>
                    <Svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M14.9292 13.1683C15.0936 13.0586 15.2867 13 15.4844 13H19C19.5523 13 20 12.5523 20 12V3C20 2.44772 19.5523 2 19 2H3C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H6.59537C6.79653 13 6.99304 13.0607 7.15918 13.1741L10.9964 15.7935L14.9292 13.1683ZM3 15C1.34315 15 0 13.6569 0 12V3C0 1.34315 1.34315 0 3 0H19C20.6569 0 22 1.34315 22 3V12C22 13.6569 20.6569 15 19 15H15.7875L11.5454 17.8317C11.2061 18.0582 10.7633 18.0559 10.4264 17.8259L6.28659 15H3Z" fill="#9A9CA5"/>
                    </Svg>
                </View>
            );
        case 'OverviewSelected':
            return (
                <View style={style}>
                    <Svg width="21" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg" >
                        <Path fillRule="evenodd" clipRule="evenodd" d="M17.1625 4.5C17.9909 4.5 18.6625 3.82843 18.6625 3C18.6625 2.17157 17.9909 1.5 17.1625 1.5C16.334 1.5 15.6625 2.17157 15.6625 3C15.6625 3.82843 16.334 4.5 17.1625 4.5ZM17.1625 6C18.8193 6 20.1625 4.65685 20.1625 3C20.1625 1.34315 18.8193 0 17.1625 0C15.5056 0 14.1625 1.34315 14.1625 3C14.1625 4.03147 14.683 4.94136 15.4758 5.48128L13.4691 10.7703C13.3173 10.7467 13.1618 10.7344 13.0034 10.7344C12.5782 10.7344 12.1737 10.8228 11.8073 10.9823L9.78354 8.79019C10.0771 8.32655 10.2471 7.77687 10.2471 7.1875C10.2471 5.53065 8.90392 4.1875 7.24707 4.1875C5.59022 4.1875 4.24707 5.53065 4.24707 7.1875C4.24707 8.15475 4.70482 9.01509 5.41551 9.56369L3.67839 14.077C3.4604 14.0266 3.23331 14 3 14C1.34315 14 0 15.3431 0 17C0 18.6569 1.34315 20 3 20C4.65685 20 6 18.6569 6 17C6 16.1192 5.62037 15.327 5.01581 14.7781L6.79567 10.1538C6.9429 10.176 7.09364 10.1875 7.24707 10.1875C7.77044 10.1875 8.2625 10.0535 8.69082 9.81789L10.6219 11.9097C10.234 12.4153 10.0034 13.0479 10.0034 13.7344C10.0034 15.3912 11.3466 16.7344 13.0034 16.7344C14.6603 16.7344 16.0034 15.3912 16.0034 13.7344C16.0034 12.7725 15.5508 11.9164 14.8469 11.3674L16.888 5.98761C16.9784 5.99581 17.0699 6 17.1625 6ZM7.24707 8.6875C8.0755 8.6875 8.74707 8.01593 8.74707 7.1875C8.74707 6.35907 8.0755 5.6875 7.24707 5.6875C6.41864 5.6875 5.74707 6.35907 5.74707 7.1875C5.74707 8.01593 6.41864 8.6875 7.24707 8.6875ZM4.5 17C4.5 17.8284 3.82843 18.5 3 18.5C2.17157 18.5 1.5 17.8284 1.5 17C1.5 16.1716 2.17157 15.5 3 15.5C3.82843 15.5 4.5 16.1716 4.5 17ZM14.5034 13.7344C14.5034 14.5628 13.8318 15.2344 13.0034 15.2344C12.175 15.2344 11.5034 14.5628 11.5034 13.7344C11.5034 12.9059 12.175 12.2344 13.0034 12.2344C13.8318 12.2344 14.5034 12.9059 14.5034 13.7344Z" fill="#2A2C35"/>
                    </Svg>
                </View>
            )
        case 'OverviewNotSelected':
            return (
                <View style={style}>
                    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path fillRule="evenodd" clipRule="evenodd" d="M17.1625 4.5C17.9909 4.5 18.6625 3.82843 18.6625 3C18.6625 2.17157 17.9909 1.5 17.1625 1.5C16.334 1.5 15.6625 2.17157 15.6625 3C15.6625 3.82843 16.334 4.5 17.1625 4.5ZM17.1625 6C18.8193 6 20.1625 4.65685 20.1625 3C20.1625 1.34315 18.8193 0 17.1625 0C15.5056 0 14.1625 1.34315 14.1625 3C14.1625 4.03147 14.683 4.94136 15.4758 5.48128L13.4691 10.7703C13.3173 10.7467 13.1618 10.7344 13.0034 10.7344C12.5782 10.7344 12.1737 10.8228 11.8073 10.9823L9.78354 8.79019C10.0771 8.32655 10.2471 7.77687 10.2471 7.1875C10.2471 5.53065 8.90392 4.1875 7.24707 4.1875C5.59022 4.1875 4.24707 5.53065 4.24707 7.1875C4.24707 8.15475 4.70482 9.01509 5.41551 9.56369L3.67839 14.077C3.4604 14.0266 3.23331 14 3 14C1.34315 14 0 15.3431 0 17C0 18.6569 1.34315 20 3 20C4.65685 20 6 18.6569 6 17C6 16.1192 5.62037 15.327 5.01581 14.7781L6.79567 10.1538C6.9429 10.176 7.09364 10.1875 7.24707 10.1875C7.77044 10.1875 8.2625 10.0535 8.69082 9.81789L10.6219 11.9097C10.234 12.4153 10.0034 13.0479 10.0034 13.7344C10.0034 15.3912 11.3466 16.7344 13.0034 16.7344C14.6603 16.7344 16.0034 15.3912 16.0034 13.7344C16.0034 12.7725 15.5508 11.9164 14.8469 11.3674L16.888 5.98761C16.9784 5.99581 17.0699 6 17.1625 6ZM7.24707 8.6875C8.0755 8.6875 8.74707 8.01593 8.74707 7.1875C8.74707 6.35907 8.0755 5.6875 7.24707 5.6875C6.41864 5.6875 5.74707 6.35907 5.74707 7.1875C5.74707 8.01593 6.41864 8.6875 7.24707 8.6875ZM4.5 17C4.5 17.8284 3.82843 18.5 3 18.5C2.17157 18.5 1.5 17.8284 1.5 17C1.5 16.1716 2.17157 15.5 3 15.5C3.82843 15.5 4.5 16.1716 4.5 17ZM14.5034 13.7344C14.5034 14.5628 13.8318 15.2344 13.0034 15.2344C12.175 15.2344 11.5034 14.5628 11.5034 13.7344C11.5034 12.9059 12.175 12.2344 13.0034 12.2344C13.8318 12.2344 14.5034 12.9059 14.5034 13.7344Z" fill="#9A9CA5"/>
                    </Svg>

                </View>
            )
        case 'AccountsNotSelected':
            return (
                <View style={style}>
                    <Svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V17C16 15.3431 14.6569 14 13 14H5C3.34315 14 2 15.3431 2 17V19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 14.2386 2.23858 12 5 12H13C15.7614 12 18 14.2386 18 17V19ZM9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5C14 7.76142 11.7614 10 9 10ZM9 8C10.6569 8 12 6.65685 12 5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 6.65685 7.34315 8 9 8ZM24 19C24 19.5523 23.5523 20 23 20C22.4477 20 22 19.5523 22 19V17.0007C21.999 15.6336 21.0737 14.44 19.75 14.0983C19.2153 13.9602 18.8937 13.4148 19.0318 12.88C19.1698 12.3453 19.7153 12.0237 20.25 12.1618C22.4562 12.7314 23.9983 14.7207 24 17V19ZM15.752 2.09875C15.2169 1.96177 14.8943 1.41698 15.0312 0.881958C15.1682 0.346932 15.713 0.0242669 16.248 0.161255C18.4604 0.727717 20.0078 2.72124 20.0078 5.005C20.0078 7.28877 18.4604 9.28229 16.248 9.84875C15.713 9.98574 15.1682 9.66306 15.0312 9.12804C14.8943 8.59301 15.2169 8.04824 15.752 7.91125C17.0794 7.57138 18.0078 6.37526 18.0078 5.005C18.0078 3.63475 17.0794 2.43863 15.752 2.09875Z" fill="#9A9CA5"/>
                    </Svg>
                </View>
            )
        case 'AccountsSelected':
            return (
                <View style={style}>
                    <Svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M18 19C18 19.5523 17.5523 20 17 20C16.4477 20 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 14.2386 2.23858 12 5 12H13C15.7614 12 18 14.2386 18 17V19ZM9 10C6.23858 10 4 7.76142 4 5C4 2.23858 6.23858 0 9 0C11.7614 0 14 2.23858 14 5C14 7.76142 11.7614 10 9 10ZM24 19C24 19.5523 23.5523 20 23 20C22.4477 20 22 19.5523 22 19V17.0007C21.999 15.6336 21.0737 14.44 19.75 14.0983C19.2153 13.9602 18.8937 13.4148 19.0317 12.88C19.1698 12.3453 19.7153 12.0237 20.25 12.1618C22.4562 12.7314 23.9983 14.7207 24 17V19ZM15.752 2.09875C15.2169 1.96177 14.8943 1.41698 15.0312 0.881958C15.1682 0.346932 15.713 0.0242669 16.248 0.161255C18.4604 0.727717 20.0078 2.72124 20.0078 5.005C20.0078 7.28877 18.4604 9.28229 16.248 9.84875C15.713 9.98574 15.1682 9.66306 15.0312 9.12804C14.8943 8.59301 15.2169 8.04824 15.752 7.91125C17.0794 7.57138 18.0078 6.37526 18.0078 5.005C18.0078 3.63475 17.0794 2.43863 15.752 2.09875Z" fill="#2A2C35"/>
                    </Svg>
                </View>
            )
        case 'FilterIcon':
            return (
                <View style={style}>
                    <Svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M14.6666 1H1.33325L6.66659 7.30667V11.6667L9.33325 13V7.30667L14.6666 1Z" stroke="#2A2C35" stroke-linecap="round" stroke-linejoin="round"/>
                    </Svg>
                </View>
            )
        case 'guideSettings':
            return (
            <View style={style}>
                <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M17.4102 21.6083L14.8779 25.3298L12.6024 21.6277C12.5115 21.4797 12.3502 21.3895 12.1765 21.3895H4.52942C4.25328 21.3895 4.02942 21.1657 4.02942 20.8895V4.75C4.02942 4.47386 4.25328 4.25 4.52942 4.25H25.4706C25.7467 4.25 25.9706 4.47386 25.9706 4.75V20.8895C25.9706 21.1657 25.7467 21.3895 25.4706 21.3895H17.8235C17.658 21.3895 17.5033 21.4714 17.4102 21.6083Z" stroke="#128297" stroke-linecap="round" stroke-linejoin="round"/>
                    <Rect x="14.1177" y="11.25" width="1.76471" height="5.625" rx="0.882353" fill="#128297"/>
                    <Rect x="14.1177" y="7.5" width="1.76471" height="1.875" rx="0.882353" fill="#128297"/>
                </Svg>
            </View>
            )
    }
};
export default PendoTabBarIcon;
