import React, { useEffect, useState } from "react";
import "./ServicesDetail.css";

import headingDesign from "../../Assets/headingDesign.svg";
import {  FaBullhorn,FaRegFileCode, FaCode } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

import PricingPlan from "../../Components/PricingPlan/PricingPlan";
import serviceimg1 from "../../Assets/seo.webp";
import serviceimg2 from "../../Assets/content-writing.webp";
import serviceimg3 from "../../Assets/googleads.jpeg";
import serviceimg4 from "../../Assets/social-media-marketing.webp";
import serviceimg5 from "../../Assets/website-development.webp";
import serviceimg6 from "../../Assets/ui-ux-design.webp";
import google1 from "../../Assets/google-ads.webp";
import google2 from "../../Assets/Google-Ads2.jpg";
import web1 from "../../Assets/web1.jpeg";
import web2 from "../../Assets/web2.jpeg";
import seo1 from "../../Assets/seo1.jpeg";
import seo2 from "../../Assets/seo2.jpeg";
import ui1 from "../../Assets/ui1.jpg";
import ui2 from "../../Assets/ui.webp";
import social1 from "../../Assets/social3.jpeg";
import social2 from "../../Assets/social2.jpeg";
import content1 from "../../Assets/content-writing.jpeg";
import content2 from "../../Assets/content-writing2.jpeg";
import { TbDeviceAnalytics, TbMapPinSearch, TbMessages, TbPencilSearch, TbPresentationAnalyticsFilled, TbSeo } from "react-icons/tb";
import { GrCopy, GrHostMaintenance, GrOptimize, GrTestDesktop } from "react-icons/gr";
import { CiCircleList, CiLink } from "react-icons/ci";
import { SiGoogleads, SiGooglemarketingplatform, SiMicrostrategy } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import { LuBox, LuMonitorCog } from "react-icons/lu";
import { MdManageAccounts, MdManageSearch, MdOutlineArticle, MdOutlineCardTravel, MdOutlineDesignServices, MdOutlineShoppingBag, MdOutlineSupportAgent, MdOutlineTouchApp, MdSchedule } from "react-icons/md";
import { CgPerformance, CgTrack, CgWebsite } from "react-icons/cg";
import { BsPostcardHeart } from "react-icons/bs";
import { VscFeedback, VscOutput, VscSymbolKeyword } from "react-icons/vsc";
import { TfiMobile, TfiWrite } from "react-icons/tfi";
import { IoAnalytics, IoBookmarksOutline } from "react-icons/io5";
import { BiBookContent, BiSupport } from "react-icons/bi";
import { AiFillLike, AiOutlineApi } from "react-icons/ai";
import { RiCalendarScheduleLine, RiTeamFill, RiUserCommunityFill } from "react-icons/ri";





const ServicesDetail = () => {
  const { name } = useParams();
  const formattedName = name.toLowerCase();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    switch (formattedName) {
      case "seo":
        setServicesData({
          title:"Search Engine Optimization (SEO)",
          
          introduction:
            "At Zemalt, we enhance your online visibility by optimizing your website for search engines and driving organic traffic. We build credibility and trust with your audience through targeted keyword strategies and quality content. Stay ahead of the competition with our continuous monitoring and optimization to improve your search rankings.",
            backgroundimg:serviceimg1,
            services: [
            {
              icon: <TbPencilSearch  />,
              name: "Keyword Research",
              description:
                "Identifying and analyzing relevant keywords that potential customers use to find products or services, ensuring your content aligns with search intent.",
            },
            {
              icon: <GrOptimize  />,
              name: "On-Page Optimization",
              description:
                "Optimizing individual web pages to improve their search engine rankings, including elements like title tags, meta descriptions, headers, and internal linking.",
            },
            {
              icon: <TbSeo  />,
              name: "Technical SEO",
              description:
                "Improving the technical aspects of a website, such as site speed, mobile-friendliness, and crawlability, to enhance user experience and search engine visibility.",
            },
          
            {
              icon: <CiLink  />,
              name: "Link Building",
              description:
                "Acquiring high-quality backlinks from authoritative sites to increase your website's authority and improve its search engine rankings.",
            },
            {
              icon: <TbMapPinSearch  />,
              name: "Local SEO",
              description:
                "Optimizing your online presence to attract more business from local searches, including managing your Google My Business listing and local citations.",
            },
            {
              icon: <TbDeviceAnalytics  />,
              name: "SEO Audit",
              description:
                "Conducting comprehensive assessments of your website's SEO performance, identifying issues, and providing actionable recommendations for improvement.",
            },
          ],
          benefits: [
            {
              name: "Boosted Visibility & Organic Growth",
              img: seo1,
              description:
                "Improve search engine rankings to make your business more discoverable. Attract higher organic traffic by optimizing for relevant keywords. Increase conversion opportunities by turning visitors into loyal customers.",
            },
            {
              name: "Seamless Experience & Higher Conversions",
              img: seo2,
              description:
                "Enhance site structure, speed, and mobile responsiveness for a smoother user journey. Attract high-intent visitors through optimized searches, increasing the likelihood of conversions. Deliver a fast, user-friendly experience that keeps customers engaged.",
            },
          ],
          process: [
            {
              icon: <TbMessages  />,
              title: "Initial Consultation",
              description:
                "Discuss goals, audience, and online presence to tailor SEO strategies effectively.",
            },
            {
              icon: <SiMicrostrategy  />,
              title: "Strategy Development",
              description:
                "Create a customized SEO plan based on research, analysis, and objectives.",
            },
            {
              icon: <GiTeamIdea  />,
              title: "Implementation",
              description:
                "Execute the SEO strategy through optimization, content creation, and link-building efforts.",
            },
            {
              icon: <LuMonitorCog  />,
              title: "Monitoring and Reporting",
              description:
                "Track performance metrics and provide regular updates for ongoing strategy adjustments.",
            },
          ],
        });
        break;
  
      case "ui-ux":
        setServicesData({
          title:'UI/UX Designing',
          introduction:
            "At Zemalt, UI/UX design combines art and science to create intuitive digital experiences. By prioritizing user needs, our designers craft visually appealing interfaces that enhance usability and foster satisfaction. We aim to ensure seamless interactions that drive engagement and business success.",
            backgroundimg:serviceimg6,
            services: [
            { icon: <MdManageSearch  />, name: "User Research", description: "Gain insights into user needs and behaviors to inform design decisions." },
            {  icon: <GrTestDesktop  />,name: "Usability Testing", description: "Evaluate designs with real users to identify issues and improve functionality." },
            {  icon: <MdOutlineTouchApp  />,name: "Interaction Design", description: "Develop intuitive interactions that facilitate user tasks and enhance engagement." },
            {  icon: <TfiMobile   />,name: "Responsive Design", description: "Ensure optimal viewing experiences across all devices and screen sizes." },
          ],
          benefits: [
            { name: "Elevate Satisfaction and Engagement",img: ui1, description: "Deliver experiences that meet user expectations, fostering contentment and loyalty. Capture user interest with interactive designs to optimize pathways for increased sales and sign-ups." },
            { name: "Foster Loyalty and Accessibility",img: ui2, description: "Cultivate strong brand loyalty through consistent and enjoyable user experiences. Design inclusive solutions that cater to diverse user needs and abilities, ensuring everyone can engage effectively." },
          ],
          process: [
            {  icon: <TbMessages />,title: "Initial Consultation", description: "Collaborate to understand your goals and project requirements." },
            {  icon: <MdManageSearch  />,title: "User Research and Analysis", description: " Conduct thorough research to gather insights into user needs and market trends." },
            {  icon: <MdOutlineDesignServices  />,title: "Design Concept Development", description: "Generate innovative design concepts that align with your vision and objectives." },
            {  icon: <VscFeedback  />,title: "Prototyping and Feedback", description: "Create prototypes to gather user feedback and refine designs iteratively." },
            {  icon: <VscOutput  />,title: "Final Design and Implementation", description: " Deliver polished designs and ensure seamless platform implementation." },
          {  icon: <BiSupport  />,title: "Ongoing Support and Iteration", description: "Provide continuous support and updates to adapt to evolving user needs and feedback." },
        ],
        });
        break;
  
      case "google-ads":
        setServicesData({
          title:'Google Ads',
          introduction:
            "Ignite your business growth with Zemalt's cutting-edge web development solutions! We craft visually stunning, high-performing websites that engage users and drive conversions. Elevate your online presence and stand out in the digital marketplace. Partner with Zemalt today and turn your vision into reality!",
            backgroundimg:serviceimg3,
          
            services: [
            { icon: <SiMicrostrategy  />, name: "Campaign Strategy Development", description: "Craft tailored marketing strategies that align with business objectives and target audiences." },
            {icon: <VscSymbolKeyword  />,  name: "Keyword Research and Selection", description: "Identify and select high-impact keywords to enhance search visibility and relevance." },
            { icon: <GrCopy  />, name: "Ad Copy Creation", description: "Write compelling ad copy that captures attention and drives user action." },
            { icon: <GrTestDesktop  />, name: "A/B Testing and Optimization", description: "Conduct experiments to refine campaigns based on performance data and user responses." },
            { icon: <SiGooglemarketingplatform  />, name: "Remarketing Campaigns", description: "Re-engage previous visitors with targeted ads to boost conversions and brand recall." },
            { icon: <CgTrack  />, name: "Performance Tracking and Reporting", description: "Monitor campaign metrics and provide insights to inform future strategies" },
            { icon: <SiGoogleads  />, name: "Google Shopping Ads", description: "Leverage Google Shopping Ads to showcase products directly in search results and drive sales." },
          ],
          benefits: [
            { name: "Swift Impact & Smart Reach", description: "Gain instant visibility in search results and social media while reaching the right audience with precision targeting. Drive engagement and maximize conversions effortlessly." ,img: google1 },
            { name: "Data-Driven Growth & Smart Spending", description: "Track campaign performance with measurable metrics for informed decisions. Optimize your budget for maximum efficiency while boosting brand awareness and sales.",img: google2 },
          ],
          process: [
            { icon: <TbMessages />, title: "Initial Consultation", description: "Understand client goals and objectives to tailor the marketing approach effectively." },
            { icon: <FaBullhorn />, title: "Campaign Setup and Configuration", description: "Establish and configure campaigns for optimal performance and reach" },
            { icon: <MdOutlineCardTravel />, title: "Ongoing Management and Optimization", description: "Continuously manage and refine campaigns to maximize results and efficiency." },
            { icon: <CgPerformance  />, title: "Performance Monitoring and Adjustment", description: "Track key metrics and make data-driven adjustments for improved outcomes." },
            { icon: <LuMonitorCog />, title: "Reporting and Insights", description: "Provide detailed reports and actionable insights to inform strategy and decision-making." },

          ],
        });
        break;
  
      case "web-development":
        setServicesData({
          title:'Web Development',
          introduction:
            "At Zemalt, we specialize in creating innovative web development solutions tailored to your business needs. Our expert team combines cutting-edge technology with user-friendly designs to deliver exceptional online experiences. Partner with Zemalt to elevate your digital presence and achieve your business goals!",
            backgroundimg:serviceimg5,
            services: [
              {icon: <CgWebsite  />, name: "Custom Website Development", description: "Build tailored websites that meet specific business requirements and enhance user experience." },
              {icon: <MdOutlineShoppingBag  />, name: "E-commerce Solutions", description: "Implement robust e-commerce platforms that facilitate online sales and streamline transactions." },
              {icon: <BiBookContent  />, name: "Content Management Systems (CMS)", description: "Develop user-friendly CMS to enable easy content updates and management by clients." },
              { icon: <FaRegFileCode  />,name: "Responsive Web Design", description: "Create websites that adapt seamlessly to various devices, ensuring an optimal viewing experience." },
              { icon: <MdOutlineSupportAgent  />,name: "Website Maintenance and Support", description: "Provide ongoing support and maintenance to ensure website performance and security." },
              { icon: <FaCode   />,name: "Web Application Development", description: "Design and develop custom web applications that enhance functionality and user engagement." },
              {icon: <AiOutlineApi />, name: "API Integration", description: "Integrate third-party APIs to extend website capabilities and improve overall performance." }
            ],
            
          benefits: [
            { name: "Seamless Experience & Future-Ready Growth", img: web1, description: "Enhance user satisfaction with intuitive interfaces and smooth navigation. Optimize performance for faster loading and responsiveness. Build scalable, adaptable websites that evolve with business needs and traffic growth." },
            { name: "Secure, Visible & Trustworthy",img: web2, description: "Strengthen security with advanced measures to protect user data and build trust. Optimize for SEO to boost search rankings and drive organic traffic, ensuring greater online visibility." },
          ],
          process: [
            { icon: <TbMessages />,title: "Initial Consultation", description: "Discuss project goals, timelines, and expectations to align on the development process." },
            { icon: <CiCircleList  />,title: "Requirement Gathering and Analysis", description: "Collect and analyze detailed requirements to ensure all stakeholder needs are addressed." },
            { icon: <MdOutlineDesignServices  />,title: "Design and Prototyping", description: "Create wireframes and prototypes to visualize the website's layout and functionality before development." },
            { icon: <FaCode/>,title: "Development and Coding", description: "Build the website using best practices in coding and development to ensure a robust foundation." },
            { icon: <GrTestDesktop />,title: "Testing and Quality Assurance", description: "Conduct thorough testing to identify and resolve any issues, ensuring the website is fully functional and user-friendly." },
            { icon: <GrHostMaintenance  />,title: "Launch and Ongoing Maintenance", description: "Deploy the website and provide ongoing support and maintenance to keep it updated and secure." }
          ],
          
        });
        break;
      
      
      
        case "content-writing":
          setServicesData({
            title:'Content Writing',
            introduction:
              "Transform your ideas into compelling narratives with Zemalt's expert content writing services! Our skilled team crafts engaging, SEO-friendly content that enhances your brand's visibility. Partner with Zemalt to connect meaningfully with your audience and elevate your message!",
              backgroundimg:serviceimg2,
              services: [
                {icon: <MdOutlineArticle  />, name: "Blog and Article Writing", description: "Create informative and engaging blog posts and articles that resonate with the target audience and drive traffic." },
                {icon: <CgWebsite  />, name: "Website Content Development", description: "Develop clear, compelling content for websites that enhances user experience and supports SEO efforts." },
                {icon: <TbSeo  />, name: "SEO Content Writing", description: "Produce optimized content that ranks well in search engines, increasing visibility and organic traffic." },
                {icon: <SiGoogleads  />, name: "Copywriting for Ads and Promotions", description: "Craft persuasive copy for advertisements and promotions that capture attention and drive conversions." },
                {icon: <BsPostcardHeart  />, name: "Social Media Content Creation", description: "Generate engaging social media posts that enhance brand presence and encourage audience interaction." },
             
                 {icon: <LuBox  />, name: "Product Descriptions", description: "Create compelling and informative product descriptions that highlight features and benefits to drive sales." }
              ],
              
            benefits: [
              { name: "Authority, Visibility & Engagement", description: "Strengthen brand credibility by positioning it as a trusted industry leader. Optimize content for higher search rankings to boost visibility and organic traffic. Craft engaging content that drives interactions, shares, and audience participation.", img: content1 },
              { name: "Maximized Conversions & Lasting Loyalty", description: " Create compelling messaging that motivates users to take action and convert. Build strong customer relationships with valuable content that enhances retention and long-term loyalty." , img: content2},
            ],
            process: [
              {icon: <TbMessages />, title: "Initial Consultation", description: "Discuss project goals and expectations to align content creation with client needs." },
              { icon: <GiTeamIdea  />,title: "Topic Research and Ideation", description: "Conduct thorough research to identify relevant topics and generate creative ideas for content." },
              {icon: <IoBookmarksOutline  />, title: "Content Planning and Outline", description: "Develop a structured outline that organizes content flow and key points for clarity." },
              { icon: <TfiWrite  />,title: "Writing and Editing", description: "Produce high-quality content, followed by meticulous editing to ensure accuracy and coherence." },
              { icon: <VscFeedback  />,title: "Client Review and Feedback", description: "Share drafts with the client for review, incorporating their feedback to refine the content." },
              { icon: <MdOutlineCardTravel  />, title: "Final Delivery and Optimization", description: "Deliver the polished content, optimizing it for search engines and intended platforms." }
            ],
            
          });
          break;
  
          case "social-media-ads":
            setServicesData({
              title:'Social Media Ads',
              introduction:
                "Unleash the power of social media ads with Zemalt! Our innovative strategies ensure your brand stands out, reaching the right audience at the right time. Experience exceptional results with tailored campaigns that resonate, engage, and convert. Elevate your marketing game and make your brand unforgettable!",
                backgroundimg:serviceimg4,
                services: [
                { icon: <SiMicrostrategy  />, name: "Social Media Strategy Development", description: "Design comprehensive strategies tailored to meet brand goals and engage target audiences." },
                { icon: <RiCalendarScheduleLine  />, name: "Content Creation and Scheduling", description: "Develop engaging content and schedule posts to maintain a consistent online presence." },
                { icon: <RiUserCommunityFill  />, name: "Community Management", description: "Foster relationships with followers by responding to comments and messages, building a loyal community." },
                { icon: <FaBullhorn />, name: "Social Media Advertising", description: "Create targeted ad campaigns to reach specific demographics and drive traffic or conversions." },
                { icon: <RiTeamFill  />, name: "Influencer Partnerships", description: "Collaborate with influencers to extend reach and enhance brand credibility through authentic endorsements." },
                { icon: <TbPresentationAnalyticsFilled  />, name: "Performance Analytics and Reporting", description: "Analyze social media metrics to assess campaign effectiveness and inform future strategies." },
                { icon: <IoAnalytics  />, name: "Platform-Specific Optimization", description: "Tailor content and strategies to maximize performance on each social media platform." }
              ],
              benefits: [
                { name: "Stronger Presence & Deeper Connections",img: social1, description: "Boost brand visibility across multiple platforms to enhance recognition. Foster meaningful customer interactions that drive engagement and loyalty. Gain valuable insights into customer preferences to refine future marketing strategies." },
                { name: "Boosted Traffic & Lasting Loyalty",img: social2, description: "Attract more visitors to your website with targeted content and promotions. Build a loyal community that fosters repeat business and long-term customer relationships. Strengthen brand connections for sustained growth and engagement." },
              ],
              process: [
                { icon: <TbMessages />, title: "Initial Consultation", description: "Establish clear goals and objectives to guide the content marketing strategy." },
                { icon: <FaBullhorn />, title: "Audience Research and Persona Development", description: "Conduct in-depth research to identify target audiences and create detailed buyer personas." },
                { icon: <MdSchedule  />, title: "Content Planning and Creation", description: "Develop a strategic content calendar and produce engaging, high-quality content tailored to the audience." },
                { icon: <MdManageAccounts  />, title: "Campaign Launch and Management", description: "Implement the content marketing campaign and manage it for optimal reach and effectiveness." },
                { icon: <AiFillLike  />, title: "Engagement and Community Building", description: "Actively engage with the audience to foster relationships and build a vibrant community around the brand." },
                { icon: <GrHostMaintenance />, title: "Performance Monitoring and Reporting", description: "Track key performance indicators and provide insights to assess campaign success and inform future strategies." }
              ],
            });
            break;
      
      default:
        setServicesData(null);
        break;
    }
  }, [name]);
  
  return (
    <div>
      <div className="Hero-section">
        <div
          className="feature-section"
          style={{
            backgroundImage: `url(${servicesData?.backgroundimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.8s ease-in-out",
          }}
        >
          <div className="blackscreen">
            <div className="text-section">
              <h1>{servicesData?.title}</h1>
              <p>{servicesData?.introduction}</p>
              <button className="secondary-button" onClick={() => navigate("/contact")}>Get Started</button>
          
            </div>
          </div>
        </div>
      </div>
      <div className="Pricing-section">
    <br/>
          <h2 className="benefits-heading">Transforming Plans into <br/>
          Powerful <span className="highlight">Solution</span></h2>
         
        <div className="features-container">
          {servicesData?.services.map((item, index) => (
            <div key={index} className="feature-item">
              <div className="class-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
        <div className="page-heading-area">
        <p>
          BENEFITS{" "}
          <span>
            <img src={headingDesign} alt="benifit" />
          </span>
        </p>
      </div>
      <div className="Soloution-main-area">
        <div className="background-box" />
      
        <div className="content-area">
          
          <div className="left">
          <p className="benifitheading">Benefits of {name}</p>
            <h2 className="benefits-heading">
    {servicesData?.benefits[0]?.name &&
      (() => {
        const words = servicesData.benefits[0].name.split(" ");
        const lastTwoWords = words.slice(-2).join(" ");
        const firstPart = words.slice(0, -2).join(" ");
        return (
          <>
            {firstPart}<br/> <span className="highlight">{lastTwoWords}</span>
          </>
        );
      })()}
  </h2>
            <p>{servicesData?.benefits[0]?.description}</p>
          </div>
          <div className="right">
            <div className="image-area">
              <div className="image-section">
                <img src={servicesData?.benefits[0]?.img} alt="Background" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-area2">
          <div className="right">
            <div className="image-area">
              <div className="image-section">
                <img src={servicesData?.benefits[1]?.img} alt="Background" />
              </div>
            </div>
          </div>
          <div className="left">
            <p className="benifitheading">Benefits of {name}</p>
            <h2 className="benefits-heading">
    {servicesData?.benefits[1]?.name &&
      (() => {
        const words = servicesData.benefits[1].name.split(" ");
        const lastTwoWords = words.slice(-2).join(" ");
        const firstPart = words.slice(0, -2).join(" ");
        return (
          <>
            {firstPart}<br/> <span className="highlight">{lastTwoWords}</span>
          </>
        );
      })()}
  </h2>
            <p>{servicesData?.benefits[1]?.description}</p>
          </div>
        </div>
      </div>

      <div className="Pricing-section">
        <center>
          <h2 className="benefits-heading">Optimizing and Customer <span className="highlight">Experience</span></h2>
          <p className="benefits-subtext2">Customer experience is the heart of every successful business. We focus on seamless interactions, personalized support, and user-friendly solutions to ensure satisfaction, loyalty, and a lasting connection with your brand.</p>
        </center>
        <div className="features-container2">
          {servicesData?.process.map((item, index) => (
            <div key={index} className="feature-item2">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        </div>
        { name === "Search Engine Optimization (SEO)" && (
  <div className="Pricing-section">
    <div className="page-heading-area">
      <p>Pricing <span><img src={headingDesign} alt="Heading Design" /></span></p>
    </div>
    <div className="upper-section">
      <h1>
        <span>Client</span> Acquisition & <br /> Fulfillment <span>Experts</span>
      </h1>
    </div>
    <PricingPlan /> 
  </div>
)}

    </div>
  );
};

export default ServicesDetail;
