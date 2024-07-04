/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
    },
    colors:{
      ball: '#ff0000',
      whit: '#ffffff',
      you: '#dee2e6',
      me: '#1e2633',
      the: '#f6f6f6',
      ma: '#c4c4c4',
      th: '#bababa',
      ar: '#828282',
      tr: '#3d3d3d',
      for: '#f8f8f8',
      hq:  'rgba(0, 0, 0, 0.45)',
      ht : 'rgba(206, 196, 196, 0.5)'
    },
      width:{
        wa: '100%'
    },
      height:{
        ha: '100%'
    },
    lineHeight:{
      what: '3.5rem'
    },
    fontSize:{
      we: "0.45rem"
    },
    backgroundImage:{
      'hero-pattern': "url('img/Elijah2.jpg')"
    },
    translate:{
      tr :'translateY(-50%)',
      td :'translateX(-30%)'
    },
    backgroundColor:{
      he:'linear-gradient(to right, rgb(232, 106, 106),black, black, black, rgb(232, 106, 106))'
    }
  },
  plugins: [
  ],
}
}
