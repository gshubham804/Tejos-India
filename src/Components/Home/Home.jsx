import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    let data=[];
    if(window.innerWidth>800){
      data = [
        [
          {
            Img : "https://tezosindia.org.in/wp-content/uploads/2021/12/om.jpg" ,
            post : "President" ,
            Name : "Om Malvia" ,
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.` ,
          },
          {
            Img   :  "https://tezosindia.org.in/wp-content/uploads/2021/12/bernd.png",
            post  : "Advisor",
            Name  : "Bernd Oostrum",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
          {
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/mudit-e1641820111130.jpg",
            post  : "BlockChain Technology analyst",
            Name  : "Mudit Marda",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
        ],
        [
          {
            Img   : "https://tezosindia.org.in/wp-content/uploads/2021/12/me.jpg",
            post  : "Growth Consultant",
            Name  : "Amanjot Malhotra",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
         {
            Img :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/jignesh.jpg",
            post : "Blockchain Solutions Architect",
            Name : "Jignesh Vasoya",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
           { 
            Img   :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/Profile-pic-Poorvi-576x1024.jpeg",
            post  : "Head - Developer Adoption",
            Name  : "Poorvi Sachar",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
        ],
        [
          {
            Img   :
                     "https://tezosindia.org.in/wp-content/uploads/2022/01/Sneha_photo-e1642687709288-1024x1024.png",
            post  : "Community Manager",
            Name  : "Sneha brader",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
          {
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/Image-from-iOS-1-scaled-e1641820036218-1024x1024.jpg",
            post  : "Social Media Manager",
            Name  : "Vaishnavi Sawant",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
        ],
        [
          { 
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/Ojuswi-1024x1024.jpg",
            post  : "Blockchain Intern",
           Name   : "Ojasvi",
            about : `B.Tech undergrad with past experience in Python and Django. Mentored and Contributed at various OpenSource events including MLH Pre-Fellowship, GSSoC, and Workshops in my college. Currently, contributing to the Smart Contracts on the Tezos Blockchain.
      
          `,
            },
         {  
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/sanket-978x1024.jpg",
            post  : "UI UX Designer",
            Name  : "Sanker Pal",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
        ],
      ] 
       
    }
    else if(window.innerWidth<=800&& window.innerWidth>580){
      data = [
        [
          {
            Img : "https://tezosindia.org.in/wp-content/uploads/2021/12/om.jpg" ,
            post : "President" ,
            Name : "Om Malvia" ,
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.` ,
          },
          {
            Img   :  "https://tezosindia.org.in/wp-content/uploads/2021/12/bernd.png",
            post  : "Advisor",
            Name  : "Bernd Oostrum",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
          {
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/mudit-e1641820111130.jpg",
            post  : "BlockChain Technology analyst",
            Name  : "Mudit Marda",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
            { 
              Img :
                "https://tezosindia.org.in/wp-content/uploads/2021/12/Ojuswi-1024x1024.jpg",
              post  : "Blockchain Intern",
             Name   : "Ojasvi",
              about : `B.Tech undergrad with past experience in Python and Django. Mentored and Contributed at various OpenSource events including MLH Pre-Fellowship, GSSoC, and Workshops in my college. Currently, contributing to the Smart Contracts on the Tezos Blockchain.
        
            `,
              }
        ],
        [
          {
            Img   : "https://tezosindia.org.in/wp-content/uploads/2021/12/me.jpg",
            post  : "Growth Consultant",
            Name  : "Amanjot Malhotra",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
         {
            Img :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/jignesh.jpg",
            post : "Blockchain Solutions Architect",
            Name : "Jignesh Vasoya",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
           { 
            Img   :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/Profile-pic-Poorvi-576x1024.jpeg",
            post  : "Head - Developer Adoption",
            Name  : "Poorvi Sachar",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
        ],
        [
          {
            Img   :
                     "https://tezosindia.org.in/wp-content/uploads/2022/01/Sneha_photo-e1642687709288-1024x1024.png",
            post  : "Community Manager",
            Name  : "Sneha brader",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
          {
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/Image-from-iOS-1-scaled-e1641820036218-1024x1024.jpg",
            post  : "Social Media Manager",
            Name  : "Vaishnavi Sawant",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
            {  
              Img :
                "https://tezosindia.org.in/wp-content/uploads/2021/12/sanket-978x1024.jpg",
              post  : "UI UX Designer",
              Name  : "Sanker Pal",
              about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
              }
        ],
         
      ] 
    }
    else if(window.innerWidth<=580){
      data = [
        [
          {
            Img : "https://tezosindia.org.in/wp-content/uploads/2021/12/om.jpg" ,
            post : "President" ,
            Name : "Om Malvia" ,
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.` ,
          },
          {
            Img   :  "https://tezosindia.org.in/wp-content/uploads/2021/12/bernd.png",
            post  : "Advisor",
            Name  : "Bernd Oostrum",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
          {
            Img :
              "https://tezosindia.org.in/wp-content/uploads/2021/12/mudit-e1641820111130.jpg",
            post  : "BlockChain Technology analyst",
            Name  : "Mudit Marda",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
            {
              Img   :
                       "https://tezosindia.org.in/wp-content/uploads/2022/01/Sneha_photo-e1642687709288-1024x1024.png",
              post  : "Community Manager",
              Name  : "Sneha brader",
              about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
              },
            {
              Img :
                "https://tezosindia.org.in/wp-content/uploads/2021/12/Image-from-iOS-1-scaled-e1641820036218-1024x1024.jpg",
              post  : "Social Media Manager",
              Name  : "Vaishnavi Sawant",
              about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
              },
        ],
        [
          {
            Img   : "https://tezosindia.org.in/wp-content/uploads/2021/12/me.jpg",
            post  : "Growth Consultant",
            Name  : "Amanjot Malhotra",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
          },
         {
            Img :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/jignesh.jpg",
            post : "Blockchain Solutions Architect",
            Name : "Jignesh Vasoya",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
           { 
            Img   :
                   "https://tezosindia.org.in/wp-content/uploads/2021/12/Profile-pic-Poorvi-576x1024.jpeg",
            post  : "Head - Developer Adoption",
            Name  : "Poorvi Sachar",
            about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
            },
            { 
              Img :
                "https://tezosindia.org.in/wp-content/uploads/2021/12/Ojuswi-1024x1024.jpg",
              post  : "Blockchain Intern",
             Name   : "Ojasvi",
              about : `B.Tech undergrad with past experience in Python and Django. Mentored and Contributed at various OpenSource events including MLH Pre-Fellowship, GSSoC, and Workshops in my college. Currently, contributing to the Smart Contracts on the Tezos Blockchain.
        
            `,
              },
           {  
              Img :
                "https://tezosindia.org.in/wp-content/uploads/2021/12/sanket-978x1024.jpg",
              post  : "UI UX Designer",
              Name  : "Sanker Pal",
              about : `Sanket is UX/UI Designer with experience in Designing across Web and Mobile Platforms. Designing Products for the Tezos ecosystem and an active contributor to the Tezos India community.`,
              },
        ],
        
      ] 
    }

    function Member(params) {
        console.log(params)
      return (
        <>
          <div className="member">
            <img src={params.member.Img} alt="" srcset="" />
            <h6>{params.member.post}</h6>
            <h1>{params.member.Name}</h1>
            <p>{params.member.about} </p>
          </div>
        </>
      );
    }
    
    function Ith(params) {
       
      return (
        <>
          <div className="team-member-col col-lg-3 col-md-4 col-sm-6  ">
            {params.ithmember.map((row) => (
              <Member member={row} />
            ))}
          </div>
        </>
      );
    }

    return (
      <>
        <div className="home-first-container">
          <div className="row-home-wrapper">
            <div class="row home-row-first">
              <h5>Our Mission</h5>
            </div>
            <div class="row home-row-second">
              <h2>We Are Dedicated To Growing The Tezos Community In India.</h2>
            </div>
            <div class="row home-row-third">
              <p>
                Blockchain and Cryptocurrency have become the fastest-growing
                space in India, and we want to introduce Tezos to the next
                thousand developers, startups, organizations & corporations.
              </p>
            </div>
            <div class="row home-row-fourth">
              <div className="home-row-fourth-container">
                <p>Twitter</p>
                <p>Discord</p>
                <p>Telegram</p>
              </div>
            </div>
            <div class="row home-row-fifth">
              <div className="blockchain-button-container">
                <button class="btn btn-primary blockchain-button" type="submit">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="home-second-container">
          <div class="row home-second-first-row">
            <h2>Empowering A Well Rounded Tezos Ecosystem In India</h2>
          </div>
          <div class="row home-second-second-row">
            <p>
              We believe that a great ecosystem is a sum of all its
              participants. We want to enable people to seamlessly participate
              in the Tezos ecosystem in India
            </p>
          </div>
        </div>

        <div className="home-third-container">
          <div class="row home-third-row">
            <div class="col col-lg-3 col-md-6 col-sm-12 home-third-container-firstcol">
              <div className="home-third-container-firstcol-img">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 33 32"
                >
                  <path d="M4.667 31.667h-4c-0.368 0-0.667-0.3-0.667-0.667v-10.667c0-0.367 0.299-0.667 0.667-0.667h4c0.368 0 0.667 0.3 0.667 0.667v10.667c0 0.367-0.299 0.667-0.667 0.667zM1.333 30.333h2.667v-9.333h-2.667v9.333zM26.667 21h-20v-0.667c0-7.52 3.14-11.333 9.333-11.333h1.333c6.193 0 9.333 3.813 9.333 11.333v0.667zM8.009 19.667h17.315c-0.169-6.277-2.791-9.333-7.991-9.333h-1.333c-5.201 0-7.821 3.056-7.991 9.333zM22.667 10.333h-1.333v-0.956c0-3.027-1.233-4.377-4-4.377h-1.333c-2.767 0-4 1.351-4 4.377v0.956h-1.333v-0.956c0-3.736 1.844-5.711 5.333-5.711h1.333c3.489 0 5.333 1.975 5.333 5.711v0.956zM16.667 4.333c-0.368 0-0.667-0.299-0.667-0.667v-2.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v2.667c0 0.368-0.299 0.667-0.667 0.667zM17.333 2.333h-1.333c-0.368 0-0.667-0.299-0.667-0.667s0.299-0.667 0.667-0.667h1.333c0.367 0 0.667 0.299 0.667 0.667s-0.3 0.667-0.667 0.667zM7.333 31c-0.368 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.299 0.667-0.667 0.667zM11.333 31c-0.368 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.299 0.667-0.667 0.667zM15.333 31c-0.368 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.299 0.667-0.667 0.667zM18 31c-0.367 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.3-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.3 0.667-0.667 0.667zM26 31c-0.367 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.3-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.3 0.667-0.667 0.667zM22 31c-0.367 0-0.667-0.3-0.667-0.667v-9.333c0-0.367 0.3-0.667 0.667-0.667s0.667 0.3 0.667 0.667v9.333c0 0.367-0.3 0.667-0.667 0.667zM32.667 31.667h-4c-0.367 0-0.667-0.3-0.667-0.667v-10.667c0-0.367 0.3-0.667 0.667-0.667h4c0.367 0 0.667 0.3 0.667 0.667v10.667c0 0.367-0.3 0.667-0.667 0.667zM29.333 30.333h2.667v-9.333h-2.667v9.333zM30.667 31.667h-29.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h29.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM32 21h-30.667c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h30.667c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667z"></path>
                </svg>
                <h2>Education</h2>
                <p>
                  We conduct regular education programs to enable the community
                  to build on Tezos & learn about Tezos.
                </p>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-sm-12 home-third-container-firstcol">
              <div className="home-third-container-secondcol-img">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                >
                  <path d="M2.656 27h26.667v1.333h-26.667v-1.333zM2.656 7h26.667v1.333h-26.667v-1.333zM2.656 28.333c-1.472 0-2.667-1.195-2.667-2.667h1.333c0 0.736 0.599 1.333 1.333 1.333v1.333zM-0.011 9.667h1.333v16h-1.333v-16zM30.656 9.667h1.333v16h-1.333v-16zM29.323 28.333v-1.333c0.747 0 1.355-0.608 1.355-1.355h1.333c0 1.483-1.207 2.688-2.688 2.688zM1.323 9.667h-1.333c0-1.469 1.195-2.667 2.667-2.667v1.333c-0.735 0-1.333 0.597-1.333 1.333zM31.989 9.667h-1.333c0-0.736-0.599-1.333-1.333-1.333v-1.333c1.471 0 2.667 1.197 2.667 2.667zM8.656 10.333c-0.368 0-0.667-0.299-0.667-0.667v-5.333c0-0.368 0.299-0.667 0.667-0.667 0.367 0 0.667 0.299 0.667 0.667v5.333c0 0.368-0.299 0.667-0.667 0.667zM23.323 10.333c-0.368 0-0.667-0.299-0.667-0.667v-5.333c0-0.368 0.299-0.667 0.667-0.667 0.367 0 0.667 0.299 0.667 0.667v5.333c0 0.368-0.299 0.667-0.667 0.667zM26.656 15h-21.333c-0.368 0-0.667-0.299-0.667-0.667s0.299-0.667 0.667-0.667h21.333c0.367 0 0.667 0.299 0.667 0.667s-0.299 0.667-0.667 0.667zM9.323 19h-4c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h4c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM18.656 19h-5.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h5.333c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM26.656 19h-4c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h4c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM9.323 23h-4c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h4c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM18.656 23h-5.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h5.333c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667zM26.656 23h-4c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h4c0.367 0 0.667 0.3 0.667 0.667s-0.299 0.667-0.667 0.667z"></path>
                </svg>
                <h2>Events</h2>
                <p>
                  We conduct events with ecosystem partners to bring rich
                  discussions around the role of blockchains today.
                </p>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-sm-12 home-third-container-firstcol">
              <div className="home-third-container-thirdcol-img">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                >
                  <path d="M16 31.944c-4.533 0-8.223-3.688-8.223-8.221s3.688-8.221 8.223-8.221 8.223 3.688 8.223 8.221-3.691 8.221-8.223 8.221zM16 16.835c-3.799 0-6.889 3.088-6.889 6.888s3.089 6.888 6.889 6.888 6.889-3.088 6.889-6.888-3.091-6.888-6.889-6.888zM16 29c-2.911 0-5.277-2.365-5.277-5.277s2.365-5.277 5.277-5.277 5.277 2.365 5.277 5.277-2.367 5.277-5.277 5.277zM16 19.779c-2.175 0-3.944 1.769-3.944 3.944s1.769 3.944 3.944 3.944c2.175 0 3.944-1.769 3.944-3.944s-1.769-3.944-3.944-3.944zM16 16.001c-0.293 0-0.563-0.195-0.643-0.493l-3.944-14.612c-0.097-0.356 0.115-0.721 0.471-0.816 0.353-0.088 0.723 0.115 0.817 0.472l3.944 14.612c0.096 0.359-0.115 0.721-0.471 0.813-0.060 0.016-0.119 0.024-0.175 0.024zM9.663 20.275c-0.288 0-0.553-0.188-0.639-0.476l-5.608-18.885c-0.107-0.353 0.095-0.724 0.448-0.829 0.353-0.101 0.724 0.095 0.829 0.448l5.608 18.885c0.105 0.356-0.096 0.724-0.449 0.831-0.064 0.017-0.128 0.027-0.189 0.027zM16 16.001c-0.057 0-0.116-0.008-0.175-0.024-0.356-0.095-0.565-0.464-0.471-0.816l3.944-14.612c0.095-0.359 0.465-0.567 0.816-0.471 0.357 0.092 0.565 0.461 0.472 0.813l-3.944 14.612c-0.081 0.301-0.348 0.497-0.643 0.497zM22.336 20.275c-0.063 0-0.125-0.009-0.189-0.028-0.353-0.104-0.555-0.473-0.449-0.828l5.608-18.885c0.105-0.353 0.475-0.549 0.829-0.451 0.355 0.107 0.555 0.476 0.449 0.831l-5.608 18.885c-0.085 0.288-0.351 0.476-0.64 0.476z"></path>
                </svg>
                <h2>Hackathons</h2>
                <p>
                  We actively conduct and support hackathons & other developer
                  activities including our flagship program, Tezos India
                  Fellowship, to enable individuals and teams to build
                  innovative projects, PoCs on Tezos.
                </p>
              </div>
            </div>
            <div class="col col-lg-3 col-md-6 col-sm-12 home-third-container-firstcol">
              <div className="home-third-container-fourthcol-img">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 32 32"
                >
                  <path d="M31.333 26.667h-30.667c-0.367 0-0.667-0.299-0.667-0.667v-17.333c0-0.368 0.3-0.667 0.667-0.667h30.667c0.367 0 0.667 0.299 0.667 0.667v17.333c0 0.368-0.3 0.667-0.667 0.667zM1.333 25.333h29.333v-16h-29.333v16zM19.333 9.333h-6.667c-0.367 0-0.667-0.299-0.667-0.667v-2.667c0-0.368 0.3-0.667 0.667-0.667h6.667c0.367 0 0.667 0.299 0.667 0.667v2.667c0 0.368-0.3 0.667-0.667 0.667zM13.333 8h5.333v-1.333h-5.333v1.333zM4.667 26c-0.367 0-0.667-0.299-0.667-0.667v-16c0-0.368 0.3-0.667 0.667-0.667s0.667 0.299 0.667 0.667v16c0 0.368-0.3 0.667-0.667 0.667zM8.667 26c-0.367 0-0.667-0.299-0.667-0.667v-16c0-0.368 0.3-0.667 0.667-0.667s0.667 0.299 0.667 0.667v16c0 0.368-0.3 0.667-0.667 0.667zM23.333 26c-0.367 0-0.667-0.299-0.667-0.667v-16c0-0.368 0.3-0.667 0.667-0.667s0.667 0.299 0.667 0.667v16c0 0.368-0.3 0.667-0.667 0.667zM27.333 26c-0.367 0-0.667-0.299-0.667-0.667v-16c0-0.368 0.3-0.667 0.667-0.667s0.667 0.299 0.667 0.667v16c0 0.368-0.3 0.667-0.667 0.667zM8 8h-2.667c-0.367 0-0.667-0.299-0.667-0.667s0.3-0.667 0.667-0.667h2.667c0.367 0 0.667 0.299 0.667 0.667s-0.3 0.667-0.667 0.667zM26.667 8h-2.667c-0.367 0-0.667-0.299-0.667-0.667s0.3-0.667 0.667-0.667h2.667c0.367 0 0.667 0.299 0.667 0.667s-0.3 0.667-0.667 0.667z"></path>
                </svg>
                <h2>Business Development</h2>
                <p>
                  We help our ecosystem partners to leverage the power of Tezos
                  by making relevant connections and help with grants on a
                  case-by-case basis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-fourth-container">
          <div className="home-fourth-container-img">
            <div className="home-fourth-container-row-wrapper">
              <div class="row home-fourth-container-row">
                <div class="col col-lg-3 col-md-6 mod-sm-12 home-fourth-container-colfirst">
                  <h5>Projects</h5>
                  <h2>13+</h2>
                </div>
                <div class="col col-lg-3 col-md-6 mod-sm-12 home-fourth-container-colsecond">
                  <div class="row home-fourth-container-colsecond-row"></div>
                  <h5>Community</h5>
                  <h2>75,000+</h2>
                </div>
                <div class="col col-lg-6 col-md-6 mod-sm-12 home-fourth-container-colthird">
                  <h5>The Difference</h5>
                  <h2>Tezos India Is Making In The Blockchain Ecosystem</h2>
                  <div className="home-fourth-container-colthird-button">
                    <button
                      class="btn btn-primary home-fourth-container-button"
                      type="submit"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="our-team-container">
          <div className="heading-cont">
            <h1>Meet Our Team</h1>
          </div>

          <div className="row team-member-container">
          {data.map((ith) => (
                <Ith ithmember={ith} />
              ))}
 
          </div>
        </div>


        <div className="home-fifth-container">
          <div class="row home-fifth-container-firstrow">
            <h2>Tezos India In Numbers</h2>
          </div>
          <div class="row home-fifth-container-secondrow">
            <div class="col col-lg-4 col-md-6 col-sm-12 home-fifth-container-secondrow-firstcol">
              <h2>13+</h2>
              <p>Projects Building actively on Tezos from India</p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 home-fifth-container-secondrow-secondcol">
              <h2>100+</h2>
              <p>Hackathons conducted by Tezos India</p>
            </div>
            <div class="col col-lg-4 col-md-6 col-sm-12 home-fifth-container-secondrow-thirdcol">
              <h2>6,000+</h2>
              <p>Developers developing on Tezos Blockchain in India</p>
            </div>
          </div>
        </div>

        <div className="home-sixth-container">
          <div class="row home-sixth-container-firstrow">
            <div class="col col-lg-6 col-md-12 col-sm-12 home-sixth-container-firstcol">
              <h2>Our Hackathon Initiatives</h2>
              <p>
                Tezos India Fellowship is our flagship event. Season 1 for Tezos
                India Fellowship was hosted in July 2020, which focused on
                upskilling the top Web3 talent and onboarding them to the Tezos
                ecosystem over a period of 8 weeks. The fellowship turned out to
                be a big hit among the hacker community in India.
              </p>
              <p>
                We received 1400+ applications in 2 weeks, out of which 10
                developers were selected. It is more like a pre-accelerator
                program where we facilitate workshops, mentorships for the
                participants to learn over the course of their journey. As a
                result, we received 7 amazing projects.
              </p>
            </div>
            <div class="col col-lg-6 col-md-12 col-sm-12 home-sixth-container-secondcol">
              <div className="home-sixth-container-secondcol-firstimg">
                <img
                  src="https://tezosindia.org.in/wp-content/uploads/2021/12/E_vjTbqUcAIsSGq.jpeg"
                  alt=""
                />
              </div>
              <div className="home-sixth-container-secondcol-secondimg">
                <img
                  src="https://tezosindia.org.in/wp-content/uploads/2021/12/E9jt2pRVEAU7zfc.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home-seventh-container">
          <div className="row home-seventh-firstrow"><h2>Some Of Our Success Stories At Tezos India</h2></div>
          <div className="row home-seventh-secondrow">
              <div className="home-seventh-container-img">
              <img src="https://tezosindia.org.in/wp-content/uploads/2021/12/download-1.png" className="home-seventh-container-img1" alt="" />
              <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/Plenty-Defi-150x150.png" className="home-seventh-container-img2" alt="" />
              <img src="https://tezosindia.org.in/wp-content/uploads/2021/12/download.png" className="home-seventh-container-img3" alt="" />
              <img src="https://tezosindia.org.in/wp-content/uploads/2022/01/Taquito.png" className="home-seventh-container-img4" alt="" />
              </div>
          </div>
        </div>

        <div className="blockchain-last-container">
          <div class="row blockchain-last-container-row-first">
            <h2>Get In Touch</h2>
          </div>
          <div class="row blockchain-last-container-row-second">
            <p>We can help you build, market and grow your project on tezos.</p>
          </div>
          <div class="row blockchain-last-container-row-third">
            <div className="blockchain-last-button">
          <button class="btn btn-primary blockchain-button" type="submit">
              Contact Us
            </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
