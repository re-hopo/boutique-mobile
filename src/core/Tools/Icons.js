import Svg, { Circle, Defs, G, Path, Rect } from "react-native-svg";


export const IconBackArrow = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height}  viewBox="0 0 24 20.586">
      <Path
        data-name="Back Arrow"
        d="M3.414 9.293H23a1 1 0 1 1 0 2H3.414L11 18.879a1 1 0 0 1-1.414 1.414L.293 11a1 1 0 0 1 0-1.414L9.586.293A1 1 0 0 1 11 1.707Z"
        fill={color}
      />
    </Svg>
  )
}


export const IconExclamation = ({color ,width ,height }) =>{
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24">
      <Defs>
        <Circle id="a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </Circle>
      </Defs>
      <G clipPath="url(#a)">
        <Path fill="rgba(255,255,255,0)" d="M0 0h24v24H0z" />
        <Path
          d="M3.515 20.486A12 12 0 0 1 20.486 3.515 12 12 0 0 1 3.515 20.486ZM2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm9 5v-5a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0Zm0-10a1 1 0 1 1 1 1 1 1 0 0 1-1-1Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}


export const Logo = ({color ,width ,height }) =>{
  return (
    <Svg height={height} width={width} viewBox="0 0 79 39 ">
      <G fill={color}>
        <Path d="m7.96,10.87c-.24.24-.32.4-.25.49.07.08.36.11.87.09h8.6c1.32,0,2.46,0,3.42.02.96.01,1.63.04,2.02.09.77.1,1.24.71,1.42,1.84.18,1.13.27,2.63.27,4.5,0,.41.07.65.2.72.13.07.35.11.67.11h1.98v5.04H1.44c-.38,0-.68-.26-.88-.79-.2-.53-.35-1.18-.43-1.96-.08-.78-.13-1.54-.13-2.29h21.35c.34,0,.54-.02.63-.07.08-.05.12-.18.12-.4,0-.82-.14-1.3-.41-1.46-.28-.16-.79-.25-1.53-.27-.53-.02-1.33-.04-2.41-.05-1.08-.01-2.32-.02-3.73-.02s-2.84,0-4.32.02c-1.47.01-2.87.02-4.19.04-1.32.01-2.44.03-3.35.05-.36,0-.66-.23-.9-.68-.24-.46-.43-1.07-.56-1.85-.13-.78-.22-1.61-.27-2.5.96-.82,2.12-1.7,3.49-2.65,1.37-.95,2.84-1.93,4.43-2.95,1.58-1.02,3.19-2.03,4.82-3.04,1.63-1.01,3.2-1.97,4.72-2.88.21.02.41.11.59.25s.29.34.34.58c-1.32,1.15-2.65,2.33-3.98,3.53s-2.59,2.35-3.78,3.46c-1.19,1.1-2.23,2.12-3.12,3.06Z"/>
        <Path d="m35.14,18.43c.02.19.23.29.61.29h3.24v5.04h-13.28v-5.04h6.66c.29,0,.43-.23.43-.68,0-.5-.08-1.04-.23-1.62-.16-.58-.23-.94-.23-1.08,0-.17.14-.31.43-.43.6-.24,1.27-.36,2.02-.36.14.72.23,1.37.25,1.94.02.58.06,1.22.11,1.94Zm-7.38,7.13c.77-.14,1.61-.22,2.52-.22h.56c.18,0,.37.01.56.04.14.38.25.86.31,1.44.06.58.09,1.12.09,1.62,0,.65-.05,1.22-.16,1.73-.11.5-.28.78-.52.83-.38.1-.79.16-1.22.18-.43.02-.88.04-1.33.04-.19,0-.39,0-.59-.02-.2-.01-.4-.03-.59-.05-.14-.38-.25-.85-.32-1.39-.07-.54-.11-1.07-.11-1.6,0-.67.07-1.27.2-1.78.13-.52.34-.79.63-.81Zm5.72-.36c.77-.14,1.6-.22,2.48-.22h.56c.18,0,.37.01.56.04.14.38.25.86.31,1.44.06.58.09,1.12.09,1.62,0,.65-.05,1.22-.16,1.73-.11.5-.28.78-.52.83-.38.1-.79.16-1.22.18-.43.02-.88.04-1.33.04-.19,0-.39,0-.59-.02-.2-.01-.4-.03-.59-.05-.14-.38-.25-.85-.32-1.39-.07-.54-.11-1.07-.11-1.6,0-.67.07-1.27.2-1.78.13-.52.35-.79.67-.81Z"/>
        <Path d="m45.54,14.9c.26-.12.59-.21.97-.27.38-.06.73-.09,1.04-.09.1.41.17.92.23,1.55.06.62.09,1.36.09,2.2,0,.89-.05,1.75-.14,2.59-.1.84-.25,1.53-.47,2.07s-.52.81-.9.81h-8.82v-5.04h7.63c.17,0,.28-.08.34-.23.06-.16.09-.35.09-.59,0-.46-.08-.96-.25-1.51-.17-.55-.25-.9-.25-1.04,0-.17.14-.31.43-.43Zm-3.96-7.6c.77-.14,1.61-.22,2.52-.22h.56c.18,0,.37.01.56.04.14.38.25.86.31,1.44.06.58.09,1.12.09,1.62,0,.65-.05,1.22-.16,1.73-.11.5-.28.78-.52.83-.38.1-.79.16-1.22.18-.43.02-.88.04-1.33.04-.19,0-.39,0-.59-.02-.2-.01-.4-.03-.59-.05-.14-.38-.25-.85-.32-1.39s-.11-1.07-.11-1.6c0-.67.07-1.27.2-1.78.13-.52.34-.79.63-.81Zm5.72-.36c.77-.14,1.6-.22,2.48-.22h.56c.18,0,.37.01.56.04.14.38.25.86.31,1.44.06.58.09,1.12.09,1.62,0,.65-.05,1.22-.16,1.73-.11.5-.28.78-.52.83-.38.1-.79.16-1.22.18s-.88.04-1.33.04c-.19,0-.39,0-.59-.02-.2-.01-.4-.03-.59-.05-.14-.38-.25-.85-.32-1.39-.07-.54-.11-1.07-.11-1.6,0-.67.07-1.27.2-1.78.13-.52.35-.79.67-.81Z"/>
        <Path d="m46.19,39.89c-.34-.26-.54-.58-.61-.94,1.99-1.63,3.94-3.3,5.85-5,1.91-1.7,3.65-3.4,5.22-5.08,1.57-1.68,2.85-3.28,3.83-4.79.05-.07.05-.13.02-.18-.04-.05-.21-.08-.52-.11-.31-.02-.86-.04-1.66-.04h-4.1c-.14-.34-.31-.79-.49-1.37-.18-.58-.34-1.18-.49-1.8-.14-.62-.26-1.19-.36-1.71-.1-.52-.14-.89-.14-1.13,0-.14.28-.5.85-1.06s1.29-1.23,2.18-2,1.84-1.57,2.86-2.41c1.02-.84,1.99-1.63,2.9-2.36s1.67-1.33,2.29-1.78c.61-.46.95-.68,1.03-.68.1,0,.26.06.49.18.23.12.44.26.65.41.2.16.31.29.31.41.07,1.18.14,2.56.2,4.16.06,1.6.1,3.2.13,4.81.02.6.08.97.18,1.1s.26.2.5.2h2.95v5.04h-2.95c-2.14,2.09-4.31,4.05-6.52,5.89-2.21,1.84-4.51,3.59-6.91,5.27-2.4,1.68-4.96,3.34-7.67,4.97Zm12.49-21.31c.26.02.62.04,1.08.04h1.26c.53,0,1,0,1.4-.02.41-.01.86-.03,1.37-.05.17-.02.27-.06.31-.11.04-.05.05-.19.05-.43,0-.41-.03-.88-.09-1.42s-.13-1.01-.22-1.42c-.08-.41-.17-.61-.27-.61-.12,0-.46.19-1.03.58-.56.38-1.21.86-1.93,1.42-.72.56-1.4,1.15-2.05,1.75-.1.07-.13.14-.11.2.02.06.1.09.22.09Z"/>
        <Path d="m76.79,14.9c.26-.12.59-.21.97-.27.38-.06.73-.09,1.04-.09.1.41.17.92.23,1.55.06.62.09,1.36.09,2.2,0,.89-.05,1.75-.14,2.59-.1.84-.25,1.53-.47,2.07s-.52.81-.9.81h-8.82v-5.04h7.63c.17,0,.28-.08.34-.23.06-.16.09-.35.09-.59,0-.46-.08-.96-.25-1.51-.17-.55-.25-.9-.25-1.04,0-.17.14-.31.43-.43Zm-4.61,10.48c.24-.12.7-.2,1.37-.25.67-.05,1.34-.07,2.02-.07h.94c.29,0,.55.02.79.07.14.43.25.95.32,1.57.07.61.11,1.21.11,1.78,0,1.46-.25,2.36-.76,2.7-.17.12-.59.21-1.28.27-.68.06-1.4.09-2.14.09-.34,0-.66,0-.97-.02-.31-.01-.6-.03-.86-.05-.14-.43-.25-.94-.32-1.53-.07-.59-.11-1.17-.11-1.75,0-.74.08-1.37.23-1.87.16-.5.38-.82.67-.94Z"/>
      </G>
    </Svg>
  )
}


export const IconMobile = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 308.75 512">

        <G data-name="Layer 2">
          <Path
            d="M112.75 37.75H196A45.07 45.07 0 0 0 240.42 0H68.33a45.07 45.07 0 0 0 44.42 37.75z"
            fill={color}
            data-original={color}
            className=""
          />
          <Path
            d="M270.61.39A75.1 75.1 0 0 1 196 67.75h-83.25A75.1 75.1 0 0 1 38.14.39 44 44 0 0 0 0 43.91v424.18A44 44 0 0 0 43.91 512h220.93a44 44 0 0 0 43.91-43.91V43.91A44 44 0 0 0 270.61.39zm-65.42 473.86H103.56a15 15 0 1 1 0-30h101.63a15 15 0 1 1 0 30z"
            fill={color}
            data-original={color}
            className=""
          />
        </G>

    </Svg>
  )
}

export const IconRegistrationHome = ({color ,width ,height }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 47.371 47.53">
       <Path d="M39.9,47.53H7.468a4.051,4.051,0,0,1-4.054-4.04V27.33H0L23.684,0,47.371,27.33H43.953V43.49A4.051,4.051,0,0,1,39.9,47.53ZM23.684,6.181,7.468,24.892v18.6H39.9v-18.6Zm6.081,29.229H17.6a4.051,4.051,0,0,1-4.054-4.04v-2.02a4.051,4.051,0,0,1,4.054-4.04H29.766a4.051,4.051,0,0,1,4.054,4.04v2.02A4.051,4.051,0,0,1,29.766,35.411ZM17.6,29.351v2.02H29.766v-2.02Z" transform="translate(0 0)" fill="#ffa601"/>
    </Svg>
  )
}


export const IconClose = ({color ,width ,height ,style }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 20 20">
       <Path fill={color} d="M16.233,15.289l2.857-2.858a.67.67,0,1,0-.947-.947l-2.857,2.858-2.857-2.858a.67.67,0,1,0-.947.947l2.857,2.858-2.857,2.858a.67.67,0,0,0,.947.947l2.857-2.858,2.857,2.858a.67.67,0,0,0,.947-.947Z" transform="translate(-11.285 -11.289)"/>
    </Svg>
  )
}


export const IconMenu = ({width ,height }) =>{
  return (
    <Svg height={width} width={height}  viewBox="0 0 20 18">
      <G transform="translate(-32 -54.3)" >
        <Rect width={16} height="2.8" rx="1.5" transform="translate(32 55)" fill="#424242" />
        <Rect width={19} height="2.8" rx="1.5" transform="translate(32 62)" fill="#455cc7" />
        <Rect width={10} height="2.8" rx="1.5" transform="translate(32 69)" fill="#424242" />
      </G>
    </Svg>
  )
}

export const IconCart = ({width ,height }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 19 20">
      <G transform="translate(-325 -52)">
        <G>
          <G transform="translate(23 11)">
            <G transform="translate(306 42)" fill="none">
              <Path d="M3.5,0A3.5,3.5,0,0,1,7,3.5v3H0v-3A3.5,3.5,0,0,1,3.5,0Z" stroke="none" />
              <Path d="M 3.5 2 C 2.672900199890137 2 2 2.672899961471558 2 3.5 L 2 4.5 L 5 4.5 L 5 3.5 C 5 2.672899961471558 4.327099800109863 2 3.5 2 M 3.5 0 C 5.433000087738037 0 7 1.566999912261963 7 3.5 L 7 6.5 C 5.221739768981934 6.5 5.25 6.5 3.5 6.5 C 1.75 6.5 2.319389820098877 6.5 0 6.5 L 0 3.5 C 0 1.566999912261963 1.566999912261963 0 3.5 0 Z" stroke="none" fill="#414442" />
            </G>
            <G transform="translate(302 47)" fill="none" stroke="#414442" strokeWidth={2}>
              <Rect width={15} height={14} rx={3} stroke="none" />
              <Rect x={1} y={1} width={13} height={12} rx={2} fill="none" />
            </G>
          </G>
          <Circle cx="2.5" cy="2.5" r="2.5" transform="translate(339 52)" fill="#455cc7" />
        </G>
      </G>
    </Svg>
  )
}

export const IconSearch = ({width ,height }) =>{
  return (
    <Svg style={{marginTop:4}} height={width} width={height} viewBox="0 0 20.414 20.414">
      <G transform="translate(1 1)">
        <Path d="M29.325,29.325l-4.35-4.35" transform="translate(-11.325 -11.325)" fill="#455cc7" stroke="#455cc7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        <Path d="M20.5,12.5a8,8,0,1,1-8-8,8,8,0,0,1,8,8Z" transform="translate(-4.5 -4.5)" fill="none" stroke="#414442" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </G>
    </Svg>
  )
}

export const IconChild = ({width ,height ,color ='' }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 32.464 36.087">
      <G fill={color} transform="translate(1 1)">
        <Path d="M23.352,26.042a.529.529,0,0,0,.529-.529V24.284a8.4,8.4,0,0,0,4.366-1.627,8.178,8.178,0,0,0,1.608-1.581,2.835,2.835,0,0,0,.848-.585l1.424-1.424a1.146,1.146,0,0,0,0-1.621l-.119-.119a1.142,1.142,0,0,0-.393-.257,1.144,1.144,0,0,0-.33-.919l-.119-.119a1.138,1.138,0,0,0-.81-.336,1.088,1.088,0,0,0-.109.005,1.144,1.144,0,0,0-.257-.392l-.119-.119a1.146,1.146,0,0,0-1.621,0l-.694.694a1.191,1.191,0,0,0-.736-.293,2.321,2.321,0,0,0,.984-1.895V12.2A2.334,2.334,0,0,0,25.468,9.87h-.111a8.505,8.505,0,0,0-.128-1.019.817.817,0,0,0,.559-.247.845.845,0,0,0,.234-.646,7.615,7.615,0,0,0-.794-2.832,8.074,8.074,0,0,0-3.85-3.667,11.355,11.355,0,0,0-9.74-.667C8.42,2.1,6.434,4.6,6.051,5.957A1.3,1.3,0,0,0,6.37,7.475a1.227,1.227,0,0,0,.677.249A8.441,8.441,0,0,0,6.625,9.87H6.514A2.334,2.334,0,0,0,4.177,12.2v1.5a2.334,2.334,0,0,0,2.337,2.326H7a8.221,8.221,0,0,0,2.641,3.851,6.134,6.134,0,0,0-1.673,4.21v5.948H5.9l-.132-.488a2.931,2.931,0,0,0-2.83-2.15,2.963,2.963,0,0,0-.759.1A2.907,2.907,0,0,0,.387,28.857,2.859,2.859,0,0,0,.1,31.05l.783,2.887a2.931,2.931,0,0,0,2.83,2.15,2.975,2.975,0,0,0,.759-.1,2.935,2.935,0,0,0,1.086-.547H26.287a2.938,2.938,0,0,0,1.087.547,2.97,2.97,0,0,0,.758.1h0a2.931,2.931,0,0,0,2.83-2.15l.783-2.887a2.858,2.858,0,0,0-.286-2.193,2.906,2.906,0,0,0-1.788-1.363,2.964,2.964,0,0,0-.759-.1,2.931,2.931,0,0,0-2.829,2.15l-.132.488h-2.07V28.051a.529.529,0,0,0-1.057,0v2.51a.528.528,0,0,0,.529.529h2.311L25.3,32.431a2.853,2.853,0,0,0,.162,1.952H6.384a2.853,2.853,0,0,0,.162-1.953l-.364-1.342H8.494a.529.529,0,0,0,.529-.529V28.48a8.236,8.236,0,0,0,.577.876.529.529,0,0,0,.844-.637,6.973,6.973,0,0,1-1.42-4.231v-.4a5.086,5.086,0,0,1,1.486-3.59,8.226,8.226,0,0,0,2.544,1.035,3.154,3.154,0,0,0,5.886,0,8.23,8.23,0,0,0,2.583-1.062l.072.04a1.874,1.874,0,0,0,.4.2,4.808,4.808,0,0,0,4.292-.884,2.691,2.691,0,0,0,1.954,1.456,7.265,7.265,0,0,1-4.9,1.971.528.528,0,0,0-.523.557c.005.1.008.188.008.278v1.429a.529.529,0,0,0,.529.529ZM6.514,14.965A1.276,1.276,0,0,1,5.234,13.7V12.2a1.276,1.276,0,0,1,1.28-1.268h.093v2.606a8.155,8.155,0,0,0,.126,1.432ZM5.345,34.095a1.858,1.858,0,0,1-1.143.87,1.909,1.909,0,0,1-.488.064A1.872,1.872,0,0,1,1.9,33.659l-.783-2.886A1.809,1.809,0,0,1,1.3,29.386a1.857,1.857,0,0,1,1.143-.87,1.908,1.908,0,0,1,.488-.064,1.871,1.871,0,0,1,1.809,1.369l.783,2.887a1.809,1.809,0,0,1-.181,1.387ZM26.32,32.708l.783-2.887a1.871,1.871,0,0,1,1.809-1.369,1.908,1.908,0,0,1,.488.064,1.858,1.858,0,0,1,1.143.87,1.809,1.809,0,0,1,.181,1.387l-.783,2.886a1.871,1.871,0,0,1-1.809,1.369,1.908,1.908,0,0,1-.488-.064,1.858,1.858,0,0,1-1.143-.87,1.81,1.81,0,0,1-.181-1.387ZM21.976,3.017A6.765,6.765,0,0,1,24.284,5.6a6.6,6.6,0,0,1,.657,2.159,5.724,5.724,0,0,1-4.4-3.157q.737-.776,1.435-1.588ZM9.657,18.46a7.114,7.114,0,0,1-1.826-3.4,1.961,1.961,0,0,1,.894-.213l1.441.626.512,1.3A1.919,1.919,0,0,1,9.657,18.46Zm6.338,4.03a2.1,2.1,0,0,1-1.634-.779c.163.01.327.016.493.016h2.275c.168,0,.335-.007.5-.017a2.094,2.094,0,0,1-1.634.78Zm1.134-1.82H14.854a7.185,7.185,0,0,1-4.375-1.478,2.972,2.972,0,0,0-1.753-5.4,3.024,3.024,0,0,0-1.046.186q-.014-.222-.014-.445v-3.12a7.382,7.382,0,0,1,.564-2.836,10.254,10.254,0,0,0,1.38-.5q.24-.1.477-.214,0,.032.007.064c.045.355.275.849,1.112,1.189a3.165,3.165,0,0,0,2.709-.584q.143-.085.283-.176a1.085,1.085,0,0,0,1.178.9,3.764,3.764,0,0,0,2-.818.529.529,0,0,0-.6-.871,2.783,2.783,0,0,1-1.4.632.418.418,0,0,1-.135-.017,1.518,1.518,0,0,1,.176-.805.529.529,0,0,0-.824-.628,9.538,9.538,0,0,1-1.231.882,2.4,2.4,0,0,1-1.759.5c-.324-.131-.45-.266-.46-.341-.024-.183.285-.565.576-.783a.529.529,0,0,0-.58-.882A21.017,21.017,0,0,1,9.2,6.1c-1.664.719-2.122.564-2.178.538a.8.8,0,0,1,.045-.4c.272-.967,2.009-3.272,4.967-4.471a10.372,10.372,0,0,1,9.008.7c-.509.586-1.428,1.61-2.427,2.559a.529.529,0,1,0,.728.766q.215-.2.425-.412a6.649,6.649,0,0,0,4.342,3.291,7.4,7.4,0,0,1,.205,1.732v3.12c0,.15-.005.3-.015.446a3.013,3.013,0,0,0-4.056,2.793,2.97,2.97,0,0,0,1.257,2.42A7.186,7.186,0,0,1,17.128,20.67Zm4.176-3.9a1.939,1.939,0,0,1,1.952-1.922,1.961,1.961,0,0,1,.894.213,7.112,7.112,0,0,1-1.826,3.4A1.919,1.919,0,0,1,21.3,16.772Zm1.2,2.97a8.215,8.215,0,0,0,2.482-3.719h.483a2.343,2.343,0,0,0,.279-.017,1.194,1.194,0,0,0-.282,1.215l.49,1.478A3.76,3.76,0,0,1,22.5,19.741Zm2.964-4.776h-.219a8.155,8.155,0,0,0,.126-1.432V10.927h.093a1.276,1.276,0,0,1,1.28,1.268v1.5a1.276,1.276,0,0,1-1.28,1.268Zm2.071,4.814a1.656,1.656,0,0,1-.478-1.053.535.535,0,0,0-.025-.128l-.567-1.712a.137.137,0,0,1,.086-.174l.172-.058a.137.137,0,0,1,.174.086l.054.161a.529.529,0,0,0,.872.208l.005-.005L29,15.938a.089.089,0,0,1,.125,0l.119.119a.089.089,0,0,1,0,.125l-1.029,1.029a.528.528,0,0,0,0,.748l.077.077a.529.529,0,0,0,.747,0l1.256-1.255a.088.088,0,0,1,.125,0l.119.119a.089.089,0,0,1,0,.125L29.283,18.28a.528.528,0,0,0,0,.748l.077.077a.529.529,0,0,0,.748,0l1.029-1.029a.089.089,0,0,1,.125,0l.119.119a.089.089,0,0,1,0,.125l-1.424,1.424a1.745,1.745,0,0,1-1.241.518,1.649,1.649,0,0,1-1.176-.483Zm0,0" transform="translate(0.001 0.001)" />
        <Path d="M156.181,153.363a.529.529,0,0,0-.529.529v.589a.529.529,0,1,0,1.057,0v-.589A.528.528,0,0,0,156.181,153.363Zm9.513,1.118v-.59a.529.529,0,1,0-1.057,0v.59a.529.529,0,1,0,1.057,0Zm-5.17,1.871h.652a.529.529,0,0,0,0-1.057H160.7v-.862a.529.529,0,0,0-1.058,0v1.039A.882.882,0,0,0,160.523,156.352Zm2.651,1.21h-5a.944.944,0,0,0-.946.94,3.456,3.456,0,1,0,6.894,0A.944.944,0,0,0,163.174,157.562Zm-2.5,3.582a2.515,2.515,0,0,1-2.387-2.525h4.775A2.516,2.516,0,0,1,160.673,161.144Zm-.068,6.536a.529.529,0,1,0-.374-.155.532.532,0,0,0,.374.155Zm-.374,1.607a.528.528,0,1,0-.155-.374A.532.532,0,0,0,160.231,169.287Zm0,0" transform="translate(-144.681 -142.554)" />
        <Path d="M169,346.08a1.148,1.148,0,0,0-.675-1.473l-.92-.342a1.2,1.2,0,0,0-.274-1.157l-.124-.133a1.194,1.194,0,0,0-1.687-.056l-1.256,1.169a3.691,3.691,0,0,1-3.038-3.608.529.529,0,0,0-1.058,0,4.739,4.739,0,0,0,3.188,4.457,2.688,2.688,0,0,0-.31,2.39,7.18,7.18,0,0,1-2.222-1.033.529.529,0,0,0-.6.869,8.236,8.236,0,0,0,3.687,1.409,2.827,2.827,0,0,0,.818.472l1.887.7a1.147,1.147,0,0,0,.4.072h0a1.151,1.151,0,0,0,1.074-.747l.059-.158a1.148,1.148,0,0,1,.768-1.147l.059-.158a1.142,1.142,0,0,1,.167-1.37Zm-.991-.368-.059.158a.089.089,0,0,1-.083.058.087.087,0,0,1-.031-.006l-1.364-.507a.528.528,0,0,0-.679.311l-.038.1a.528.528,0,0,0,.311.68l1.664.619a.089.089,0,0,1,.052.114l-.059.158a.089.089,0,0,1-.083.058.087.087,0,0,1-.031-.006l-1.664-.619a.529.529,0,0,0-.68.311l-.038.1a.528.528,0,0,0,.311.68l1.364.507a.086.086,0,0,1,.05.046.087.087,0,0,1,0,.068l-.058.158a.089.089,0,0,1-.083.058.083.083,0,0,1-.031-.006l-1.888-.7a1.712,1.712,0,0,1-1.038-2.183,1.656,1.656,0,0,1,.758-.873.523.523,0,0,0,.106-.077l1.321-1.229a.138.138,0,0,1,.194.006l.124.133a.138.138,0,0,1-.006.194l-.124.116a.529.529,0,0,0,.181.883l1.546.574a.089.089,0,0,1,.052.114Zm0,0" transform="translate(-148.534 -315.991)" />
      </G>
    </Svg>
  )
}

export const IconKids = ({width ,height ,color ='' }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 44.409 32.996">
      <G fill={color} transform="translate(0 0)">
        <Path d="M320.083,233.878a2.137,2.137,0,0,0,2.135-2.134.651.651,0,1,0-1.3,0,.833.833,0,1,1-1.667,0,.651.651,0,1,0-1.3,0A2.137,2.137,0,0,0,320.083,233.878Zm3.411-3.649a.65.65,0,0,0,.65-.651v-.68a.651.651,0,0,0-.081-1.3h-.57a.651.651,0,0,0-.651.651v1.325A.651.651,0,0,0,323.493,230.229Zm-7.472-1.33v.68a.651.651,0,0,0,1.3,0v-1.325a.651.651,0,0,0-.651-.651h-.57a.651.651,0,0,0-.081,1.3Z" transform="translate(-288.09 -213.568)" />
        <Path d="M41.715,81.919a3.015,3.015,0,0,0-.469-3.285.647.647,0,0,0,.119-.374,12.523,12.523,0,0,0-.482-4.714.651.651,0,1,0-1.228.43,9.589,9.589,0,0,1,.409,3.633H36.057a3.417,3.417,0,0,1-3.414-3.413.651.651,0,1,0-1.3,0,3.417,3.417,0,0,1-3.414,3.413H23.921V76.4a7.34,7.34,0,0,1,7.332-7.332.089.089,0,0,1,.089.089.651.651,0,0,0,1.3,0,.089.089,0,0,1,.089-.089A7.334,7.334,0,0,1,38.26,71.58a.651.651,0,1,0,.981-.854,8.635,8.635,0,0,0-6.509-2.962,1.382,1.382,0,0,0-.74.214,1.382,1.382,0,0,0-.74-.214A8.643,8.643,0,0,0,22.62,76.4v1.862a.647.647,0,0,0,.119.374,3.026,3.026,0,0,0-.526.839,3.289,3.289,0,0,0-1.285-2.353V74.641a8.859,8.859,0,0,0-8.849-8.849,17.229,17.229,0,0,0-2.4.11,7.39,7.39,0,0,0-5.632,3.342l-1.959-.626a.651.651,0,0,0-.848.589,30.619,30.619,0,0,0,.589,7.587,3.3,3.3,0,0,0,1.045,6.228,8.448,8.448,0,0,0,3.9,5.336H5.4a4.084,4.084,0,0,0-4.079,4.079v5.7a.651.651,0,0,0,.651.651H3.052a.651.651,0,0,0,0-1.3h-.43v-5.05A2.781,2.781,0,0,1,5.4,89.658H7.292a3.887,3.887,0,0,0,7.665,0H16.85a2.781,2.781,0,0,1,2.778,2.778v5.05H6.088a.651.651,0,0,0,0,1.3h14.19a.651.651,0,0,0,.651-.651v-5.7a4.056,4.056,0,0,0-.3-1.532h1.045a4.836,4.836,0,0,0,1.849-.366,3.949,3.949,0,0,0-.635,2.151v5.447a.651.651,0,0,0,.651.651H40.491a.651.651,0,0,0,.651-.651V92.689a3.95,3.95,0,0,0-.621-2.128,4.836,4.836,0,0,0,1.791.343h1.447a.651.651,0,0,0,.651-.651V86.269a4.9,4.9,0,0,0-2.694-4.351ZM27.929,78.91a4.717,4.717,0,0,0,4.064-2.327,4.717,4.717,0,0,0,4.064,2.327h2.924a1.722,1.722,0,1,1-.069,3.443.649.649,0,0,0-.669.543A6.343,6.343,0,0,1,26.492,85a.651.651,0,0,0-.037-.078,6.3,6.3,0,0,1-.6-1.5l-.007-.031q-.063-.247-.1-.5a.65.65,0,0,0-.669-.543,1.722,1.722,0,1,1-.069-3.443l.071,0a.646.646,0,0,0,.082,0h2.771ZM32,92.216a2.247,2.247,0,0,1-2.245-2.245v-.824a7.665,7.665,0,0,0,4.489-.007v.831a2.248,2.248,0,0,1-2.129,2.242l-.115,0Zm-5.142-3.5h0a3.956,3.956,0,0,0-1.275.211,4.843,4.843,0,0,0,.841-1.856,7.551,7.551,0,0,0,2.031,1.541v.1Zm8.688-.114a7.575,7.575,0,0,0,2.009-1.531,4.841,4.841,0,0,0,.827,1.837,8.364,8.364,0,0,0-2.836-.192V88.6ZM2.517,70.121l1.623.519a.651.651,0,0,0,.767-.3A6.094,6.094,0,0,1,9.779,67.2a16.342,16.342,0,0,1,2.3-.106,7.557,7.557,0,0,1,7.548,7.548V76.52c-.568-.122-.389-.074-9.31-.074a4.354,4.354,0,0,1-4.269-3.51.651.651,0,0,0-1.113-.32,8.469,8.469,0,0,0-1.951,3.425,28.77,28.77,0,0,1-.467-5.921ZM4.052,82.289a.651.651,0,0,0-.668-.543l-.082,0a2,2,0,0,1-.073-4h.008q.074,0,.148,0h.006a.65.65,0,0,0,.66-.543,7.094,7.094,0,0,1,1.11-2.79,5.665,5.665,0,0,0,5.155,3.333h8.7a2.023,2.023,0,0,1,.928.279l.016.008a2,2,0,0,1-1.038,3.714l-.082,0a.652.652,0,0,0-.668.543,7.16,7.16,0,0,1-14.121,0Zm6.942,9.3a2.59,2.59,0,0,1-2.441-2.317c0-.009,0-.019,0-.029q0-.042-.006-.085a8.514,8.514,0,0,0,5.162-.008,2.589,2.589,0,0,1-2.712,2.438Zm5.855-3.235H15.457a8.448,8.448,0,0,0,3.9-5.336A3.312,3.312,0,0,0,22,80.948a3,3,0,0,0,.271.971,4.9,4.9,0,0,0-2.694,4.351v3.136a4.062,4.062,0,0,0-2.727-1.049ZM20.878,89.6V86.269a3.585,3.585,0,0,1,2.214-3.3,3.049,3.049,0,0,0,1.473.651,7.7,7.7,0,0,0,.672,1.781v.636A3.567,3.567,0,0,1,21.674,89.6h-.8ZM39.84,97.486H24.189v-4.8a2.677,2.677,0,0,1,2.674-2.673h1.6a3.546,3.546,0,0,0,7.091,0h1.618a2.676,2.676,0,0,1,2.673,2.673v4.8ZM43.108,89.6h-.8a3.567,3.567,0,0,1-3.563-3.563V85.4a7.694,7.694,0,0,0,.672-1.781,3.021,3.021,0,0,0,1.41-.6c.021-.016.042-.031.062-.048a3.585,3.585,0,0,1,2.214,3.3Z" transform="translate(0 -65.791)"/>
        <Path d="M81.131,224.4a2.312,2.312,0,0,0,2.309-2.309.651.651,0,0,0-1.3,0,1.008,1.008,0,0,1-2.016,0,.651.651,0,0,0-1.3,0A2.312,2.312,0,0,0,81.131,224.4Zm-3.812-6.839a.651.651,0,0,0-.651.651v1.438a.651.651,0,0,0,1.3,0v-1.438A.651.651,0,0,0,77.319,217.564Zm7.624,2.739a.651.651,0,0,0,.651-.651v-1.438a.651.651,0,1,0-1.3,0v1.438A.651.651,0,0,0,84.943,220.3Z" transform="translate(-70.018 -204.4)"  />
      </G>
    </Svg>
  )
}
export const IconWoman = ({width ,height ,color ='' }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 30.248 37.144">
      <G fill={color} transform="translate(0 0)">
        <Path d="M63.342,25.429h-2.42a1.225,1.225,0,0,1-1.21-1.233v-1.72a6.815,6.815,0,0,0,3-5.142,2.458,2.458,0,0,0,1.839-2.386V10.631a8.306,8.306,0,0,0-.309-2.207l.194-.2,5,11.9A.6.6,0,0,0,70,20.5a.807.807,0,0,0,.121-.012.614.614,0,0,0,.484-.6V8.781a6.786,6.786,0,0,0-4.549-6.425,4.428,4.428,0,0,0-.774-1.1,4.2,4.2,0,0,0-6,0L57.862,2.713a8.147,8.147,0,0,0-1.174-.1h-1.21a8.147,8.147,0,0,0-1.174.1L52.883,1.258a4.2,4.2,0,0,0-6,0,4.429,4.429,0,0,0-.774,1.1,6.786,6.786,0,0,0-4.549,6.425v11.1a.614.614,0,0,0,.484.6.807.807,0,0,0,.121.012.6.6,0,0,0,.557-.376l5-11.9.194.2a8.306,8.306,0,0,0-.309,2.207v4.316a2.458,2.458,0,0,0,1.839,2.386,6.815,6.815,0,0,0,3,5.142V24.2a1.225,1.225,0,0,1-1.21,1.233h-2.42a7.948,7.948,0,0,0-7.864,8.016v3.083a.611.611,0,0,0,.6.617H70.6a.611.611,0,0,0,.6-.617V33.445A7.948,7.948,0,0,0,63.342,25.429Zm-.6-9.415V14.947h.6A1.228,1.228,0,0,1,62.738,16.013Zm3.775-11.7c0-.148-.006-.29-.018-.438a5.588,5.588,0,0,1,2.9,4.9v8.1l-4.035-9.6a4.318,4.318,0,0,0,1.155-2.96Zm-6.37-2.183a2.985,2.985,0,0,1,4.278,0,3.087,3.087,0,0,1,.653.993c.006.006.006.018.012.025A3.264,3.264,0,0,1,65.3,4.317a3.084,3.084,0,0,1-.883,2.177l-.212.222-.442.444a7.968,7.968,0,0,0-4.531-4.107ZM42.774,16.877v-8.1a5.588,5.588,0,0,1,2.9-4.9c-.012.148-.018.29-.018.438a4.318,4.318,0,0,0,1.155,2.96ZM48.4,7.159l-.442-.444-.212-.222a3.084,3.084,0,0,1-.883-2.177,3.23,3.23,0,0,1,.218-1.159c.006-.012.006-.018.012-.031a3.144,3.144,0,0,1,.647-.993,2.994,2.994,0,0,1,4.283,0l.907.919A7.968,7.968,0,0,0,48.4,7.159Zm1.028,8.854a1.228,1.228,0,0,1-.6-1.067h.6Zm0-2.917v.617h-.6V10.631a6.724,6.724,0,0,1,6.655-6.783h1.21a6.724,6.724,0,0,1,6.655,6.783v3.083h-.6V13.1a.611.611,0,0,0-.6-.617h-.175a3,3,0,0,1-2.7-1.7L58.436,9.12A.594.594,0,0,0,57.4,9.058l-.266.4a6.6,6.6,0,0,1-5.535,3.021H50.033a.611.611,0,0,0-.6.617Zm1.21,3.7V13.714h.956a7.8,7.8,0,0,0,6.219-3.108l.357.721a4.194,4.194,0,0,0,3.358,2.362V16.8a5.446,5.446,0,1,1-10.889,0Zm.6,9.866a2.443,2.443,0,0,0,2.42-2.466V23.11a6.482,6.482,0,0,0,4.84,0V24.2a2.443,2.443,0,0,0,2.42,2.466h1.041l-5.88,6.493L50.2,26.662ZM70,35.911h-4.84V33.445a.605.605,0,1,0-1.21,0v2.466H48.219V33.445a.605.605,0,1,0-1.21,0v2.466h-4.84V33.445a6.729,6.729,0,0,1,6.4-6.77l7.072,7.806a.593.593,0,0,0,.883,0L63.6,26.674a6.729,6.729,0,0,1,6.4,6.77Z" transform="translate(-40.959 -0.001)" />
        <Path d="M201.973,186.933v-.507a.507.507,0,0,0-1.014,0v.507a.507.507,0,0,0,1.014,0Zm3.55.507a.507.507,0,0,0,.507-.507v-.507a.507.507,0,0,0-1.014,0v.507A.507.507,0,0,0,205.523,187.44Zm-.236,2.981.087-.087a.507.507,0,1,0-.716-.718l-.088.087a1.556,1.556,0,0,1-2.152,0l-.087-.087a.507.507,0,1,0-.716.718l.087.086A2.536,2.536,0,0,0,205.287,190.422Z" transform="translate(-188.371 -171.062)" />
      </G>
    </Svg>
  )
}

export const IconMan = ({width ,height ,color ='' }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 40.425 43.313">
      <G fill={color} transform="translate(0 0)">
        <Path d="M47.279,28.8,42.19,27.46l-1.646-.549V24.7a7.941,7.941,0,0,0,3.609-6.648h.722a2.874,2.874,0,0,0,2.166-4.779V5.775a4.331,4.331,0,0,0-4.331-4.331h-.722a2.161,2.161,0,0,0-1.206.368A3.6,3.6,0,0,0,37.656,0H31.881a6.507,6.507,0,0,0-6.5,6.5v6.771a2.874,2.874,0,0,0,2.166,4.779h.722A7.941,7.941,0,0,0,31.881,24.7v2.216l-1.646.549L25.146,28.8A12.287,12.287,0,0,0,16,40.663v1.927a.722.722,0,0,0,.722.722H55.7a.722.722,0,0,0,.722-.722V40.663A12.287,12.287,0,0,0,47.279,28.8Zm-6.15-.166-1.039,4.129-2.743-1.834,2.671-2.671Zm-4.916,1.393-2.888-2.888v-1.7a7.873,7.873,0,0,0,5.775,0v1.7Zm.96,3.544-.274.094a2.226,2.226,0,0,1-1.372,0l-.274-.094.152-1.119.809-.541.809.541Zm9.146-18.408A1.448,1.448,0,0,1,44.875,16.6h-.722V13.716h.722A1.448,1.448,0,0,1,46.319,15.159ZM28.272,16.6H27.55a1.444,1.444,0,1,1,0-2.888h.722Zm0-5.775v1.444H27.55a2.956,2.956,0,0,0-.722.1V6.5a5.059,5.059,0,0,1,5.053-5.053h5.775a2.172,2.172,0,0,1,2.166,2.166.722.722,0,1,0,1.444,0,.722.722,0,0,1,.722-.722h.722A2.888,2.888,0,0,1,45.6,5.775v6.6a2.956,2.956,0,0,0-.722-.1h-.722V10.828a2.172,2.172,0,0,0-2.166-2.166H30.438A2.172,2.172,0,0,0,28.272,10.828Zm1.444,7.219V10.828a.722.722,0,0,1,.722-.722h11.55a.722.722,0,0,1,.722.722v7.219a6.5,6.5,0,0,1-12.994,0Zm2.693,10.207,2.671,2.671-2.743,1.834L31.3,28.63Zm.282,13.615H26.828V38.259a.722.722,0,1,0-1.444,0v3.609H17.444V40.663A10.835,10.835,0,0,1,25.514,30.2l4.4-1.162L31.181,34.1a.712.712,0,0,0,.44.5.665.665,0,0,0,.26.051.715.715,0,0,0,.4-.123l1.53-1.018Zm1.458,0,.917-6.843.007.007a3.694,3.694,0,0,0,2.281,0l.007-.007.917,6.843Zm20.833,0H47.041V38.259a.722.722,0,1,0-1.444,0v3.609H39.735L38.616,33.51l1.53,1.018a.715.715,0,0,0,.4.123.665.665,0,0,0,.26-.051.713.713,0,0,0,.44-.5l1.263-5.068,4.4,1.162a10.835,10.835,0,0,1,8.071,10.467Z" transform="translate(-16)"  />
        <Path d="M206.5,154.166a.722.722,0,0,0,.722-.722v-.722a.722.722,0,0,0-1.444,0v.722A.722.722,0,0,0,206.5,154.166Zm.144,5.125a.722.722,0,0,0-.866-1.155,3.629,3.629,0,0,1-4.331,0,.722.722,0,1,0-.866,1.155A5.079,5.079,0,0,0,206.641,159.291Zm-5.2-5.847v-.722a.722.722,0,0,0-1.444,0v.722a.722.722,0,1,0,1.444,0Z" transform="translate(-183.397 -138.284)"  />
      </G>
    </Svg>
  )
}

export const IconArrowLeft = ({width ,height ,color ='' }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 128 128">
      <G>
        <Path fill={color} d="M84 108a3.988 3.988 0 0 1-2.828-1.172l-40-40a3.997 3.997 0 0 1 0-5.656l40-40c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656L49.656 64l37.172 37.172a3.997 3.997 0 0 1 0 5.656A3.988 3.988 0 0 1 84 108z" />
      </G>
    </Svg>
  )
}






















export const LogoSecond = ({width ,height }) =>{
  return (
    <Svg height={width} width={height} viewBox="0 0 104 116.2">
      <G>
        <G>
          <Path fill="#3A63F9" d="M35.6,24.3l-8.1,14.1c0.5,16.7,6.3,32.1,15.8,44.7h9.4c-11.2-12.6-18-29.2-18-47.4C34.7,31.9,35,28,35.6,24.3z" />
          <Path fill="#3A63F9" d="M17.6,55.6c2.2,9.9,6,19.2,11.1,27.6h8.7c-7.5-10.9-12.5-23.7-14.1-37.4L17.6,55.6L17.6,55.6z" />
          <Path fill="#3A63F9" d="M9.3,69.8c1.6,4.6,3.5,9,5.8,13.3h8.3c-3.9-6.8-7-14.1-9.1-21.8L9.3,69.8L9.3,69.8z" />
          <Path fill="#3A63F9" d="M1.6,83.1h7.7c-1.2-2.5-2.3-5-3.3-7.5C6,75.6,1.6,83.1,1.6,83.1z" />
          <Path fill="#001580" d="M77.8,45.7c-1.4,12-5.4,23.4-11.7,33.7c-1.2-1.1-2.3-2.2-3.5-3.4c6.8-11.4,10.5-24.2,10.9-37.5l-8.1-14.1
                c0.6,3.8,0.9,7.5,0.9,11.4c0,12-3,23.7-8.6,34.1c-1.2-1.8-2.4-3.6-3.4-5.4c4.6-8.8,7-18.7,7-28.7s-2.4-19.9-7-28.7
                c-0.2-0.4-0.4-0.8-0.7-1.2L50.5,0l-3.2,5.8c-3.8,7-6.3,14.7-7.2,22.6c0,0.5-0.1,1.1-0.2,1.7c0,0.6-0.1,1.2-0.1,1.8
                c-0.1,1.3-0.1,2.6-0.1,3.9s0,2.6,0.1,3.9c0,0.6,0.1,1.2,0.1,1.8c0,0.5,0.1,1.1,0.2,1.7c0.9,8.3,3.3,16.3,7.2,23.6
                c2.2,4.2,4.9,8.3,8.1,12l3.2,3.8l0.1-0.2c0.2,0.3,0.5,0.6,0.8,0.8h12.9c5.3-8.6,9-17.8,11.2-27.6L77.8,45.7L77.8,45.7z M50.5,55.3
                c-1.8-4.8-2.9-9.7-3.4-14.8C47.1,39.7,47,39,47,38.3c0-0.8,0-1.7,0-2.5s0-1.7,0-2.5c0-0.8,0.1-1.7,0.2-2.5c0-0.6,0.1-1.2,0.2-1.9
                c0.5-4.4,1.6-8.6,3.2-12.6c2.4,6.2,3.6,12.8,3.6,19.5S52.9,49.1,50.5,55.3L50.5,55.3z" />
          <Path fill="#3A63F9" d="M86.8,61.3c-2.1,7.6-5.1,14.9-9.1,21.8H86c2.2-4.3,4.2-8.7,5.8-13.2C91.8,69.9,86.8,61.4,86.8,61.3z" />
          <Path fill="#3A63F9" d="M95.1,75.6c-1,2.6-2.1,5-3.3,7.5h7.6L95.1,75.6z" />
        </G>
      </G>
      <G>
        <G>
          <Path fill="#001B7F" d="M16.1,101.6c0,1.1-0.2,2.2-0.6,3.1c-0.4,0.9-0.9,1.8-1.6,2.4c-0.7,0.7-1.5,1.2-2.4,1.6
                c-0.9,0.4-1.9,0.6-2.9,0.6c-1,0-2-0.2-2.9-0.6c-0.9-0.4-1.7-0.9-2.4-1.6c-0.7-0.7-1.2-1.5-1.6-2.4c-0.4-0.9-0.6-2-0.6-3.1v-13h3.7
                v6.8c0.2-0.3,0.4-0.5,0.7-0.7s0.6-0.4,0.9-0.5c0.3-0.1,0.7-0.2,1-0.3s0.7-0.1,1-0.1c1,0,2,0.2,2.9,0.6c0.9,0.4,1.7,0.9,2.4,1.6
                c0.7,0.7,1.2,1.5,1.6,2.5C15.9,99.4,16.1,100.5,16.1,101.6z M12.3,101.6c0-0.6-0.1-1.1-0.3-1.6c-0.2-0.5-0.5-0.9-0.8-1.3
                c-0.3-0.4-0.7-0.6-1.2-0.8s-0.9-0.3-1.4-0.3c-0.5,0-1,0.1-1.4,0.3S6.3,98.5,6,98.8c-0.3,0.4-0.6,0.8-0.8,1.3s-0.3,1-0.3,1.5
                c0,0.6,0.1,1.1,0.3,1.6s0.5,0.9,0.8,1.3c0.3,0.4,0.7,0.6,1.2,0.8s0.9,0.3,1.4,0.3c0.5,0,1-0.1,1.4-0.3s0.8-0.5,1.2-0.8
                c0.3-0.4,0.6-0.8,0.8-1.3C12.2,102.7,12.3,102.1,12.3,101.6z" />
        </G>
        <G>
          <Path fill="#001B7F" d="M32.6,102.6c0,0.9-0.2,1.8-0.5,2.6s-0.8,1.5-1.4,2.1s-1.3,1.1-2,1.4s-1.6,0.5-2.5,0.5c-0.9,0-1.7-0.2-2.5-0.5
                s-1.5-0.8-2-1.4s-1-1.3-1.4-2.1s-0.5-1.7-0.5-2.6c0-1,0.2-1.8,0.5-2.6s0.8-1.5,1.4-2.1s1.3-1.1,2-1.4s1.6-0.5,2.5-0.5
                c0.9,0,1.7,0.2,2.5,0.5s1.5,0.8,2,1.3s1,1.3,1.4,2.1S32.6,101.6,32.6,102.6z M29.3,102.6c0-0.5-0.1-1-0.3-1.4s-0.4-0.8-0.7-1.1
                s-0.6-0.5-1-0.7s-0.8-0.2-1.2-0.2s-0.8,0.1-1.2,0.2s-0.7,0.4-1,0.7s-0.5,0.7-0.7,1.1s-0.2,0.9-0.2,1.4c0,0.5,0.1,0.9,0.2,1.3
                s0.4,0.8,0.7,1.1s0.6,0.5,1,0.7s0.8,0.3,1.2,0.3s0.8-0.1,1.2-0.2s0.7-0.4,1-0.7s0.5-0.7,0.7-1.1S29.3,103.2,29.3,102.6z" />
          <Path fill="#001B7F" d="M45.7,107.6c-0.3,0.2-0.5,0.5-0.8,0.7s-0.6,0.4-0.9,0.5s-0.7,0.3-1,0.4s-0.7,0.1-1,0.1
                c-0.8,0-1.5-0.1-2.2-0.4s-1.3-0.7-1.8-1.2s-0.9-1.1-1.2-1.8s-0.4-1.5-0.4-2.4v-6.9h3.2v6.9c0,0.4,0.1,0.8,0.2,1.1s0.3,0.6,0.5,0.8
                s0.5,0.4,0.8,0.5s0.6,0.2,0.9,0.2c0.3,0,0.6-0.1,0.9-0.2s0.5-0.4,0.8-0.6s0.4-0.5,0.5-0.8s0.2-0.6,0.2-1v-6.9h3.2V109h-0.8
                L45.7,107.6z" />
          <Path fill="#001B7F" d="M58.4,109c-0.8,0-1.5-0.1-2.2-0.4s-1.3-0.7-1.8-1.2s-0.9-1.1-1.2-1.8c-0.3-0.7-0.4-1.4-0.4-2.2v-3.7h-1.6
		          	v-3.2h1.6v-5H56v5h4.9v3.2H56v3.7c0,0.3,0.1,0.7,0.2,0.9s0.3,0.5,0.5,0.8s0.5,0.4,0.8,0.5s0.6,0.2,0.9,0.2h2.4v3.2H58.4z" />
          <Path fill="#001B7F" d="M68.6,93.1c0,0.3-0.1,0.6-0.2,0.8s-0.3,0.5-0.5,0.7s-0.4,0.3-0.7,0.5s-0.5,0.2-0.8,0.2s-0.6-0.1-0.8-0.2
                s-0.5-0.3-0.7-0.5s-0.3-0.4-0.5-0.7s-0.2-0.5-0.2-0.8c0-0.3,0.1-0.6,0.2-0.8s0.3-0.5,0.5-0.7s0.4-0.3,0.7-0.5s0.5-0.2,0.8-0.2
                s0.6,0.1,0.8,0.2s0.5,0.3,0.7,0.5s0.3,0.4,0.5,0.7S68.6,92.8,68.6,93.1z M68,109h-3.2V96.5H68V109z" />
          <Path fill="#001B7F" d="M84.8,113.8h-3.2v-5.6c-0.2,0.1-0.5,0.3-0.7,0.4s-0.5,0.3-0.8,0.4s-0.5,0.2-0.8,0.3s-0.6,0.1-0.8,0.1
                c-0.9,0-1.7-0.2-2.5-0.5s-1.5-0.8-2-1.4s-1-1.3-1.4-2.1s-0.5-1.7-0.5-2.7c0-1,0.2-1.9,0.5-2.7s0.8-1.5,1.4-2.1s1.3-1,2-1.3
                s1.6-0.5,2.5-0.5c0.4,0,0.8,0.1,1.2,0.2s0.8,0.2,1.2,0.4s0.7,0.4,1.1,0.6s0.7,0.5,1,0.8l1.2-1.5h0.8V113.8z M81.6,102.6
                c0-0.4-0.1-0.9-0.3-1.3s-0.4-0.8-0.7-1.1s-0.6-0.6-1-0.8s-0.8-0.3-1.2-0.3s-0.8,0.1-1.2,0.2s-0.7,0.4-1,0.7s-0.5,0.7-0.7,1.1
                s-0.2,0.9-0.2,1.4c0,0.5,0.1,1,0.2,1.4s0.4,0.8,0.7,1.1s0.6,0.5,1,0.7s0.8,0.2,1.2,0.2s0.8-0.1,1.2-0.3s0.7-0.4,1-0.8
                s0.5-0.7,0.7-1.1S81.6,103.1,81.6,102.6z" />
        </G>
        <G>
          <Path fill="#001B7F" d="M94.8,105.7c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0c0.3,0,0.7,0,1-0.1c0.3-0.1,0.6-0.2,0.9-0.4
                c0.3-0.2,0.5-0.4,0.7-0.6c0.2-0.2,0.4-0.5,0.5-0.8l2.5,2.6c-0.3,0.5-0.7,0.9-1.1,1.2s-0.9,0.7-1.4,0.9c-0.5,0.3-1,0.4-1.5,0.6
                c-0.5,0.1-1.1,0.2-1.7,0.2c-1,0-1.9-0.2-2.7-0.5c-0.8-0.4-1.6-0.9-2.2-1.5c-0.6-0.6-1.1-1.4-1.5-2.3c-0.4-0.9-0.5-1.8-0.5-2.9
                c0-1.1,0.2-2.1,0.5-2.9c0.4-0.9,0.9-1.6,1.5-2.3c0.6-0.6,1.4-1.1,2.2-1.5c0.8-0.3,1.7-0.5,2.7-0.5c0.6,0,1.1,0.1,1.7,0.2
                c0.5,0.1,1.1,0.3,1.5,0.6c0.5,0.3,0.9,0.6,1.4,0.9c0.4,0.4,0.8,0.8,1.1,1.2L94.8,105.7z M96.5,98.6c-0.2-0.1-0.3-0.1-0.5-0.1
                c-0.2,0-0.3,0-0.5,0c-0.5,0-0.9,0.1-1.3,0.3c-0.4,0.2-0.8,0.4-1.1,0.7c-0.3,0.3-0.6,0.7-0.7,1.2c-0.2,0.5-0.3,1-0.3,1.5
                c0,0.1,0,0.3,0,0.4s0,0.3,0.1,0.5c0,0.2,0.1,0.3,0.1,0.5c0,0.2,0.1,0.3,0.2,0.4L96.5,98.6z" />
        </G>
      </G>
    </Svg>
  )
}


