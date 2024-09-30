
import cookies from 'js-cookies';
const  Token  = cookies.getItem('token')
export const config = {
    headers: { 'content-type': 'multipart/form-data',
    'Authorization': `Bearer ${Token} `}
  } 


  export const jobdata =[
{
    image:'/images/job/1.png',
    title:'Project Manager',
    company:'Dominos',
    location:'NSUK Nasarawa',
    min_salary:'20',
    max_salary:'500',
    level:'Entry Level',
    id:'1',
    office:'Lagos Unit'

},
{
    image:'/images/job/3.png',
    title:'Security',
    company:'Dominos',
    location:'Abuja',
    min_salary:'200',
    max_salary:'900',
    level:'Entry Level',
    id:'2',
    office:'Lagos Unit'

}

  ]