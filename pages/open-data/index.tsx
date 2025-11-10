import React, { useEffect } from 'react'
import { doFetch } from '../../services/service';
import OpenDataBanner from '../../components/OpenDataBanner';
import OpenDataContent from '../../components/OpenDataContent';


export async function getStaticProps() {

  const data = await doFetch("/open-data1s?populate=*");

  console.log(data)

  return {
    props: {
      data,
       // You can construct a title from your data.
       title: data?.heroTitle ? `${data.heroTitle} ` : "IT initiatives",
    },
  };
}

const AboutItInitiative = ({data}) => {


  return (<>
    <div>
   <OpenDataBanner data={data}/>
   <OpenDataContent data={data} />
    </div>
  </>)
}
export default AboutItInitiative;
