import React, { Component } from 'react'
import './Blog.css'

export default class Blog extends Component {
  render() {
    let blogData=[]
  
    if(window.innerWidth> 880 ){
        blogData = [
      [
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2021/11/1_o_4Di9EgcU_fY2jF2Qjq2A.jpeg",
          title: " Plenty Global Hackathon: Plenty x Tezos India to advance Tezos DeFi ecosystem",
          about:
            "Plenty is thrilled to open up the applications for its FIRST ever hackathon in collaboration…",
        },
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2013/03/Dexter-1024x576.jpeg",
          title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
          about:
            "In this article, we will take a look at the following: What is Dexter? What…",
        },
      ],
      [
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2014/07/Tezasia-1024x512.png",
          title: "  TEZASIA: Tezos India & TZ APAC collaborate to host an Asia-wide Hackathon",
          about:
            "Wild Question Marks and devious Semikoli, but the Little Blind Text didn’t...",
        },
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2013/03/TIF2-1024x585.jpeg",
          title: " TIF strikes back for the next edition!",
          about:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost",
        },
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2022/01/TIF-prog.jpeg",
          title: " Wrap Up — Tezos India Fellowship Cohort 2K20",
          about:
            "The Tezos India Fellowship, an Eight-week intensive mentor-led program, has been a landmark event for…",
        },
      ],
      [
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2013/04/Women-in-Tez-1024x738.png",
          title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
          about:
            "In this article, we will take a look at the following: What is Dexter? What…",
        },
        {
          img: "https://tezosindia.org.in/wp-content/uploads/2013/02/performtransfer-1024x576.png",
          title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
          about:
            "In this article, we will take a look at the following: What is Dexter? What…",
        },
      ],
    ];
    }
    else if(window.innerWidth>576 && window.innerWidth<880)
    {
      
         blogData = [
        [
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2021/11/1_o_4Di9EgcU_fY2jF2Qjq2A.jpeg",
            title: " Plenty Global Hackathon: Plenty x Tezos India to advance Tezos DeFi ecosystem",
            about:
              "Plenty is thrilled to open up the applications for its FIRST ever hackathon in collaboration…",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/03/Dexter-1024x576.jpeg",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          },{
            img: "https://tezosindia.org.in/wp-content/uploads/2013/04/Women-in-Tez-1024x738.png",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          } 
        ],
        [
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2014/07/Tezasia-1024x512.png",
            title: "  TEZASIA: Tezos India & TZ APAC collaborate to host an Asia-wide Hackathon",
            about:
              "Wild Question Marks and devious Semikoli, but the Little Blind Text didn’t...",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/03/TIF2-1024x585.jpeg",
            title: " TIF strikes back for the next edition!",
            about:
              "Even the all-powerful Pointing has no control about the blind texts it is an almost",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2022/01/TIF-prog.jpeg",
            title: " Wrap Up — Tezos India Fellowship Cohort 2K20",
            about:
              "The Tezos India Fellowship, an Eight-week intensive mentor-led program, has been a landmark event for…",
          }, {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/02/performtransfer-1024x576.png",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          } 
        ],
         
      ]; 
    }
    else if(window.innerWidth<576){
         blogData = [
        [
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2021/11/1_o_4Di9EgcU_fY2jF2Qjq2A.jpeg",
            title: " Plenty Global Hackathon: Plenty x Tezos India to advance Tezos DeFi ecosystem",
            about:
              "Plenty is thrilled to open up the applications for its FIRST ever hackathon in collaboration…",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/03/Dexter-1024x576.jpeg",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          },
         
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2014/07/Tezasia-1024x512.png",
            title: "  TEZASIA: Tezos India & TZ APAC collaborate to host an Asia-wide Hackathon",
            about:
              "Wild Question Marks and devious Semikoli, but the Little Blind Text didn’t...",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/03/TIF2-1024x585.jpeg",
            title: " TIF strikes back for the next edition!",
            about:
              "Even the all-powerful Pointing has no control about the blind texts it is an almost",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2022/01/TIF-prog.jpeg",
            title: " Wrap Up — Tezos India Fellowship Cohort 2K20",
            about:
              "The Tezos India Fellowship, an Eight-week intensive mentor-led program, has been a landmark event for…",
          },
        
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/04/Women-in-Tez-1024x738.png",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          },
          {
            img: "https://tezosindia.org.in/wp-content/uploads/2013/02/performtransfer-1024x576.png",
            title: "Dexter: A Decentralized Exchange Pltaform On Tezos",
            about:
              "In this article, we will take a look at the following: What is Dexter? What…",
          },
        ],
       
      ];
    }

    return (
        <>
        <div className="blog-main-container">
          <div className="blog-main-wrapper">
            <h1>Read Our Blog</h1>
            <p>Explore The Activities We Are Doing</p>
          </div>
        </div>
       

        <div className="blogs-container">
           <div className="row blog-row">
               {
                  blogData.map( (data) =>(

                       
                    <div className="col col-lg-4 col-md-6 col-sm-12 blog-col">
                      {
                        data.map( (row) =>(

                          <section className="blog-section">
                               <a href="" className="whole-blog-link">
                                 <div> <img src={row.img} alt="" /></div>
                                  <h6>General</h6>
                                  <h1>{row.title}</h1>
                                  <p>{row.about}</p>
                                  <div className="blog-postman">
                                     <div className="postman-image">
                                       <div className="small"></div>
                                       <div className="big"></div>
                                     </div>
                                     <div className="postman-name">
                                       <h6>Tezos India</h6>
                                       <p>March 21,2021</p>
                                     </div>
                                  </div>
                               </a>
                          </section>

                        ) )
                      }

                    </div>

                  ) )
               }
           </div>
       </div>
      </>
    )
  }
}
