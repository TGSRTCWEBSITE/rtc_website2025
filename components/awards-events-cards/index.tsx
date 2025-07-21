import React from 'react';
import DynamicContent from '../dynamicContent';
import AboutCardData from '../awards-events-cards-data'

interface Image {
    src: string;
    caption: string;
  }
  

interface ContentSection {
    title?: string;
    para?: string; 
    bullets?: string[];
    images?: Image[];
    backgroundColor?: string;
}
 interface Data{
    eventsCardsData:ContentSection[]
 }

const AboutEventsContent = ({ data }: { data: Data }) => {
    return (
        <div >
            {data?.eventsCardsData?.map((item: any, index: number) => (
                <DynamicContent
                    key={index}
                    number={index + 1}
                    ContentComponent={() => <AboutCardData data={item}/>}
                    backgroundColor={item.backgroundColor}
                />
            ))}
        </div>
    )
}
export default AboutEventsContent;