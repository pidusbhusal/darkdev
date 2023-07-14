export interface ProjectProps {
  databaseId: number;
  title: string;
  projects: {
    description: string;
    link: string;
    id: string;
    messsage: string;
    image: {
      title: string;
      sourceUrl: string;
    };
  };
}

export interface TestimonialProps {
  databaseId: number;
  title: string;
  testimonials: {
    description: string;
    post: string;
    id: string;
    image: {
      sourceUrl: string;
    };
  };
}

export interface SkillsProps {
  databaseId: number;
  title: string;
  uiUxDesign: {
    description: string;
    skillCollection: {
      subSkill: string;
      __typename: string;
    }[];
  };
}

export interface ImagesProps { 
    id : string,
    title: string,
    myImage:{
      image:{
        sourceUrl:string
      }
    }}
             
          
