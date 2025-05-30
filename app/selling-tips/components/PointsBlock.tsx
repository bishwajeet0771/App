import { commonLinks } from "@/app/news/components/NewsDetailsPage";
import Link from "next/link";
import React from "react";

type Props = {};

const styles = {
  svgStyle:
    "transition-transform duration-300 group-hover:scale-125 h-[80px] w-[80px] md:h-[130px] md:w-[130px] ",
};

const allPoints = [
  {
    title: "Price it Right",
    points: [
      "Research market trends and set a competitive price.",
      "Avoid overpricing, as it can deter buyers.",
    ],
    icon: (
      <svg
        version="1.2"
        className={styles.svgStyle}
        baseProfile="tiny"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
      >
        <path
          d="M77.3,43.8C61.9,38,29.6,33.2,11.8,33.5l1.1-15c20.7-0.2,57.6,5.5,74.5,13.3L77.3,43.8z M194.9,30.1l49.7,187.3l-138.8,36.9
                l-49.8-186L77.6,44c2.1,0.8,4.2,1.6,6.3,2.5c13.2,5.5,23.7,12.2,30.6,19.3c-3.8,5.5-5.3,12.5-3.5,19.5c3.3,12.5,16.2,20,28.7,16.6
                c12.5-3.3,20-16.2,16.6-28.7c-3.3-12.5-16.2-20-28.7-16.6c-0.3,0.1-0.6,0.2-0.8,0.2c-9.6-10.6-24-19.2-39.1-25.2l25.5-28.9
                L194.9,30.1z M191.2,179.5c-4.4-16.5-23.2-16.5-31.4-16.6c-15.4-0.2-18-5-18.6-7.8c-1.2-6.6,5.5-10.1,12.4-10.4
                c5.5-0.2,11.6,1.4,15.2,2.9l6.5-13.5c-5.5-1.9-12.5-4.5-21.6-3.8l-2.9-10.7l-13.8,3.7l2.7,10.3c-13,4.6-19.7,15.3-16.6,26.8
                c3,11.2,12.5,14.3,21.7,16.1c7.6,1.4,27.4-0.2,28.6,8.6c0.7,4.8-3.4,9.5-11.8,10.7c-7.3,1-16.5-2.9-16.5-2.9l-7.6,13.1
                c7.6,3.4,15.1,4.8,22.7,4.3l2.7,10.1l13.8-3.7l-2.5-9.6C186.9,202,194.2,190.5,191.2,179.5z"
        />
      </svg>
    ),
  },
  {
    title: "Boost Curb Appeal",
    points: [
      "First impressions matter—maintain landscaping and exterior cleanliness.",
      "Fresh paint and minor repairs can make a big difference.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        width="150px"
        height="150px"
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="12"
          d="M92.953 57.154c22.628-22.627 57.983-35.355 76.368-33.94 1.414 18.384-11.314 53.74-33.941 76.367-22.628 22.627-48.084 39.598-62.226 45.255L47.698 119.38c5.657-14.142 22.628-39.598 45.255-62.226Zm-5.657 48.084-39.598 39.598"
        />
        <circle
          cx="128.309"
          cy="64.225"
          r="12"
          fill="#000000"
          transform="rotate(45 128.309 64.225)"
        />
        <path
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="12"
          d="m115.581 119.38 1.569 17.256c.779 8.57-3.09 16.9-10.139 21.835l-16.886 11.82-1.414-32.527M73.154 76.953l-17.256-1.569a24 24 0 0 0-21.835 10.139l-11.82 16.886 32.527 1.414"
        />
      </svg>
    ),
  },
  {
    title: "Stage the Property",
    points: [
      "Declutter and depersonalize spaces to help buyers visualize themselves in the home.",
      "Use neutral colors and modern decor.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
      >
        <g>
          <g>
            <path
              d="M503.983,495.949h-17.637V264.534c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v231.415h-95.132
               v-308.91h95.132v34.739c0,4.427,3.588,8.017,8.017,8.017c4.428,0,8.017-3.589,8.017-8.017V102.062
               c0-2.023-0.765-3.972-2.142-5.456l-55.582-59.858c-3.124-3.366-8.625-3.366-11.749,0L361.29,96.606
               c-1.377,1.483-2.142,3.431-2.142,5.456v393.887h-39.549V367.147c0-4.427-3.588-8.017-8.017-8.017
               c-4.428,0-8.017,3.589-8.017,8.017v128.802h-95.132V281.101h95.132v43.29c0,4.427,3.588,8.017,8.017,8.017
               c4.428,0,8.017-3.589,8.017-8.017V196.124c0-2.023-0.765-3.972-2.142-5.456l-55.582-59.858c-3.124-3.366-8.625-3.366-11.749,0
               l-55.582,59.858c-1.377,1.483-2.142,3.431-2.142,5.456v299.825h-39.549V290.187c0-2.023-0.765-3.972-2.142-5.456l-55.582-59.858
               c-3.124-3.366-8.625-3.366-11.749,0l-55.582,59.858c-1.377,1.483-2.142,3.431-2.142,5.456v119.716
               c0,4.427,3.588,8.017,8.017,8.017c4.428,0,8.017-3.589,8.017-8.017v-34.739h95.132v120.785H41.687v-43.29
               c0-4.427-3.588-8.017-8.017-8.017c-4.428,0-8.017,3.589-8.017,8.017v43.29H8.017c-4.428,0-8.017,3.589-8.017,8.017
               s3.588,8.017,8.017,8.017h495.967c4.428,0,8.017-3.589,8.017-8.017S508.412,495.949,503.983,495.949z M436.109,171.005h-26.722
               v-43.825h26.722V171.005z M375.182,105.21l47.566-51.225l47.566,51.225v65.796h-18.171v-51.841c0-4.427-3.588-8.017-8.017-8.017
               H401.37c-4.428,0-8.017,3.589-8.017,8.017v51.841h-18.171V105.21z M269.361,265.068h-26.722v-43.825h26.722V265.068z
                M208.434,199.272L256,148.048l47.566,51.225v65.796h-18.171v-51.841c0-4.427-3.588-8.017-8.017-8.017h-42.756
               c-4.428,0-8.017,3.589-8.017,8.017v51.841h-18.171V199.272z M102.614,359.131H75.891v-43.825h26.722V359.131z M136.818,359.131
               h-18.171v-51.841c0-4.427-3.588-8.017-8.017-8.017H67.875c-4.428,0-8.017,3.589-8.017,8.017v51.841H41.687v-65.796l47.566-51.225
               l47.566,51.225V359.131z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M97.804,265.068H80.701c-4.428,0-8.017,3.589-8.017,8.017c0,4.427,3.588,8.017,8.017,8.017h17.102
               c4.428,0,8.017-3.589,8.017-8.017C105.82,268.657,102.232,265.068,97.804,265.068z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M264.551,171.005h-17.102c-4.428,0-8.017,3.589-8.017,8.017s3.588,8.017,8.017,8.017h17.102
               c4.428,0,8.017-3.589,8.017-8.017S268.98,171.005,264.551,171.005z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M431.299,76.943h-17.102c-4.428,0-8.017,3.589-8.017,8.017s3.588,8.017,8.017,8.017h17.102
               c4.428,0,8.017-3.589,8.017-8.017S435.727,76.943,431.299,76.943z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M176.301,276.114l-81.236-85.511c-3.115-3.279-8.509-3.279-11.624,0L2.205,276.114c-3.05,3.21-2.919,8.284,0.29,11.333
               c3.21,3.05,8.283,2.921,11.335-0.29l75.423-79.394l75.424,79.393c3.254,3.425,8.927,3.241,11.961-0.376
               C179.222,283.699,179.069,279.027,176.301,276.114z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M343.05,182.052l-81.236-85.511c-3.115-3.279-8.509-3.279-11.624,0l-81.236,85.511c-3.05,3.21-2.919,8.284,0.29,11.333
               c3.208,3.049,8.283,2.92,11.333-0.291l75.424-79.393l75.424,79.393c3.254,3.425,8.927,3.241,11.961-0.376
               C345.971,189.637,345.817,184.965,343.05,182.052z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d="M509.796,87.989L428.56,2.477c-3.115-3.279-8.509-3.279-11.624,0L335.7,87.989c-3.05,3.21-2.919,8.284,0.29,11.333
               c3.21,3.05,8.283,2.921,11.335-0.29l75.423-79.394l75.424,79.393c3.254,3.425,8.927,3.241,11.961-0.376
               C512.717,95.574,512.563,90.901,509.796,87.989z"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Professional Photography & Virtual Tours",
    points: [
      "High-quality images and 3D tours attract more online buyers.",
      "Use natural lighting for better presentation.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 301.111 301.111"
      >
        <g id="XMLID_1445_">
          <g>
            <g>
              <path
                d="M174.071,171.001l-4.695-2.026l-26.787,77.339c10.031,27.987,10.283,27.901,10.714,32.421l36.757-106.126
                            C184.872,173.699,179.309,173.26,174.071,171.001z"
              />
              <path
                d="M300.536,282.853L229.957,79.075h0.295c2.169,0,3.928-1.759,3.928-3.928V63.655h14.865c2.169,0,3.928-1.758,3.928-3.928
                            V40.598c0-2.169-1.758-3.928-3.928-3.928H234.18V25.178c0-2.169-1.758-3.928-3.928-3.928h-9.03V10.649
                            c0-3.054-2.476-5.529-5.529-5.529c-3.054,0-5.529,2.476-5.529,5.529v10.602h-9.03c-2.169,0-3.928,1.759-3.928,3.928v49.969
                            c0,1.964,1.443,3.586,3.325,3.877l-13.689,39.524l8.312,3.586c13.419,5.79,19.74,21.419,13.892,34.975
                            c-1.079,2.501-2.498,4.751-4.177,6.723v74.1c0,5.726,4.642,10.367,10.367,10.367s10.367-4.642,10.367-10.367V129.858
                            l55.341,159.781c1.874,5.41,7.778,8.278,13.189,6.403C299.544,294.169,302.411,288.264,300.536,282.853z"
              />
              <circle cx="125.521" cy="33.676" r="29.468" />
              <path
                d="M189.9,134.309l-48.824-21.065L97.142,76.37l25.743,13.347c-0.314-6.102-3.421-11.981-8.912-15.606L84.348,54.553
                            c-9.175-6.057-21.523-3.53-27.58,5.645c-1.818,2.754-43.782,61.754-55.618,85.168c-1.816,3.592-1.395,8.323,0.656,12.151
                            l27.486,51.3l-16.299,68.951c-2.309,9.765,5.108,19.135,15.148,19.133c7.046-0.001,13.43-4.822,15.121-11.977l17.655-74.682
                            c0.888-3.759,0.279-7.738-1.426-10.922L47.103,176.2c6.33,4.179,0.236-0.995,35.62,31.111l28.415,79.282
                            c2.899,8.087,11.802,12.291,19.886,9.392c8.085-2.897,12.291-11.801,9.392-19.886l-29.728-82.942
                            c-0.861-2.402-2.299-4.555-4.189-6.27l-26.97-24.472c2.777-4.206,20.647-31.275,23.442-35.508L79.977,96.824l45.431,38.13
                            c0.993,0.834,2.103,1.519,3.294,2.032l50.62,21.84c6.776,2.922,14.628-0.203,17.547-6.97
                            C199.791,145.086,196.67,137.23,189.9,134.309z"
              />
            </g>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Market Aggressively",
    points: [
      "List on top real estate platforms (Zillow, Realtor.com, etc.).",
      "Utilize social media ads and email marketing.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        fill="#000000"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="150px"
        height="150px"
        viewBox="0 0 137 256"
      >
        <path
          d="M39,49.3H27.2c0-15.2,12.4-27.6,27.6-27.6v11.8C46,33.5,39,40.6,39,49.3z M43.6,194.3l-2.7-7.3l-1.5,0.6
       c-4.2,1.9-6.1,6.8-4.3,11c1.4,3.1,4.4,5,7.7,5c0.1,0,0.2,0,0.3,0C42.9,200.6,43.1,197.4,43.6,194.3z M20.5,170.8
       c-4.2,1.9-6.1,6.8-4.3,11c1.4,3.1,4.4,5,7.7,5c1.1,0,2.3-0.2,3.4-0.7l11.3-5l-5.9-15.7L20.5,170.8z M7.1,151.3
       c-4.2,1.9-6.1,6.8-4.3,11c1.4,3.1,4.4,5,7.7,5c1.1,0,2.3-0.2,3.4-0.7l16.5-7.3l-5.9-15.7L7.1,151.3z M134.8,254H86.1l-6.8-13.3
       c0,0-13.5-2.3-23.4-16.4c-7-9.9-8-21.8-6.2-30.5l-20.7-55.1c-1.6-4.3,0.3-9.2,4.5-11.2c1.2-0.6,2.6-0.9,3.9-0.9
       c3.3,0,6.5,1.9,8.1,5.1l19.1,39.9c0.5,1.1,1.6,1.7,2.7,1.7c0.4,0,0.9-0.1,1.3-0.3c1.5-0.7,2.1-2.5,1.4-3.9l-17.5-37
       c-2.1-5.2-4.9-8.3-6.5-9.5v-27C24,91.5,7.5,72.3,7.5,49.3C7.5,23.2,28.7,2,54.7,2C80.8,2,102,23.2,102,49.3
       c0,23-16.6,42.2-38.4,46.4v36.4l5.3,0c3.6,0,7.1,1.5,9.7,4l24.2,24.2c3.3,3.3,5.2,7.8,5.2,12.5v28L134.8,254z M54.7,84.7
       c19.6,0,35.4-15.9,35.4-35.4S74.3,13.8,54.7,13.8c-19.6,0-35.4,15.9-35.4,35.4S35.2,84.7,54.7,84.7z"
        />
      </svg>
    ),
  },
  {
    title: "Highlight Key Selling Points",
    points: [
      "Emphasize unique features (smart home tech, energy efficiency, etc.).",
      " Showcase nearby amenities like schools, parks, and shopping centers.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 490.016 490.016"
      >
        <g>
          <g>
            <path
              d="M348.6,174.533c0-96.4-78-174.5-174.3-174.5S0,78.133,0,174.533s78,174.5,174.3,174.5S348.6,270.833,348.6,174.533z
                M174.3,309.933c-74.7,0-135.3-60.6-135.3-135.4c0-74.9,60.6-135.5,135.3-135.5s135.3,60.7,135.3,135.5
               C309.7,249.333,249.1,309.933,174.3,309.933z"
            />
            <path
              d="M450.6,329.933l-102.3-69c-18.7,37.6-49.3,68.3-86.7,87.3l68.5,102.7c30.3,45.9,95.6,52.5,134.5,13.6
               S496.9,360.733,450.6,329.933z"
            />
            <path
              d="M174.3,60.133c-63.1,0-114.2,51.2-114.2,114.3s51.1,114.3,114.2,114.3s114.2-51.2,114.2-114.3S237.4,60.133,174.3,60.133z
                M133.8,149.933v20.6l-33.8-33.8l33.8-33.9v20.6h45.1v26.1h-45.1L133.8,149.933L133.8,149.933z M214.7,245.733v-20.7H170v-26h45.1
               v-20.6l33.8,33.9L214.7,245.733z"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Work with a Skilled Agent",
    points: [
      "An experienced real estate agent can bring in more leads and negotiate better deals.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 441.609 441.609"
      >
        <g>
          <path
            d="M164,214.971c53.854,0,97.667-43.813,97.667-97.667S217.854,19.638,164,19.638s-97.667,43.813-97.667,97.667
           S110.146,214.971,164,214.971z M228.871,98.088c-7.493,2.774-15.475,4.217-23.538,4.217c-30.293,0-56.522-20.2-64.878-48.434
           c7.337-2.732,15.268-4.232,23.545-4.232C194.637,49.638,220.568,70.11,228.871,98.088z M114.705,71.021
           c14.56,36.179,50.07,61.284,90.628,61.284c8.574,0,17.088-1.138,25.307-3.338c-5.545,31.771-33.306,56.005-66.64,56.005
           c-37.312,0-67.667-30.355-67.667-67.667C96.333,99.413,103.326,83.134,114.705,71.021z"
          />
          <path
            d="M402.601,213.446H272.094l-29.198,49.713c-24.084-13.25-51.059-20.188-78.896-20.188c-90.43,0-164,73.57-164,164v15
           h441.609V279.864L402.601,213.446z M233.084,391.971H179v-64h-30v64H30.834C37.762,330.042,87.071,280.742,149,273.813v34.158h30
           v-34.155c19.169,2.132,37.548,8.333,54.084,18.309V391.971z M385.429,243.446l14.975,25.497H274.29l14.975-25.497H385.429z
            M352.347,391.971v-58.028h-30v58.028h-59.263v-93.028h148.525v93.028H352.347z"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Be Flexible with Showings",
    points: [
      "Allow potential buyers to view the property at various times, including evenings and weekends.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 495.815 495.815"
      >
        <g>
          <g>
            <path
              d="M488.54,394.903c-19.876-16.557-43.646-40.701-47.388-50.244
               c-3.998-10.232-4.503-49.207-2.479-79.424c0.063-0.867,0.271-8.551-0.256-11.695l-6.807-40.724
               c9.138,14.361,18.085,30.573,25.326,45.854c2.74,5.779,8.48,9.168,14.476,9.168c2.302,0,4.64-0.492,6.839-1.535
               c8.021-3.771,11.424-13.326,7.641-21.322c-7.381-15.603-44.205-89.739-82.706-105.603c-0.419-0.141-7.941-3.474-17.004-4.287
               l-8.425,11.906l-11.559-8.681c-0.017,0.019-0.055,0.026-0.101,0.049c-4.857,2.063-12.373,7.379-15.876,10.509
               c-7.111,6.191-11.92,12.542-16.146,18.146c-6.731,8.913-10.434,13.817-20.789,16.392c-16.479,4.124-33.163-7.656-33.254-7.718
               c-7.121-5.259-17.164-3.739-22.411,3.382c-0.523,0.725-0.979,1.908-1.37,2.938l-43.854-21.997v-29.42h6.31
               c9.789,0,17.735-7.299,17.735-16.296c0-8.993-7.954-16.292-17.735-16.292H17.716C7.939,98.009,0,105.308,0,114.301
               c0,8.997,7.938,16.296,17.716,16.296h6.065v153.188h84.91v137.772H76.528l-0.1,21.678h80.688l0.1-21.678h-32.181V283.803h87.396
               l0.001-118.665l42.438,21.455c-0.687,5.56,1.325,11.305,6.138,14.861c0.953,0.708,20.425,14.837,45.136,14.837
               c4.772,0,9.785-0.544,14.872-1.801c10.072-2.509,17.451-6.667,23.322-11.422l11.021,65.854c0.686,3.988,2.022,7.613,3.884,10.854
               c-16.604,28.492-45.354,86.191-45.127,143.439c0.038,11.125,9.063,20.104,20.172,20.104c0.022,0,0.046,0,0.076,0
               c11.155-0.045,20.146-9.107,20.096-20.264c-0.168-48.516,26.408-100.344,40.61-124.521c0.729,0,1.469-0.066,2.186-0.098
               c-0.188,21.945,0.977,47.227,6.313,60.895c9.523,24.406,50.941,59.732,59.148,66.586c3.757,3.129,8.341,4.668,12.896,4.668
               c5.788,0,11.529-2.469,15.535-7.27C498.271,414.747,497.114,402.03,488.54,394.903z M207.157,278.928h-0.007H29.069V130.597
               h178.082v27.649l-27.082-13.417l-1.557,4.606l28.632,13.943l0.016,115.549h-0.003V278.928z M391.345,227.497l-0.186,0.035
               l-12.039-11.8l-1.202-67.225l0.197-0.03l20.804,63.95L391.345,227.497z"
            />
            <path
              d="M368.841,134.995c22.784,0,41.251-18.469,41.251-41.25c0-22.78-18.467-41.25-41.251-41.25
               c-22.773,0-41.249,18.47-41.249,41.25C327.592,116.526,346.064,134.995,368.841,134.995z"
            />
            <path
              d="M161.823,163.339c-6.205,0-11.235,5.03-11.235,11.235c0,3.247,1.386,6.164,3.588,8.215
               l-11.317,24.322c-1.429-0.12-2.878,0.054-4.255,0.497l-20.816-26.546c0.677-1.46,1.02-2.997,1.02-4.584
               c0-6.188-5.036-11.224-11.225-11.224c-6.187,0-11.22,5.035-11.22,11.224c0,2.109,0.63,4.202,1.794,6.014l-23.915,25.495
               c-1.383-0.601-2.824-0.904-4.296-0.904c-6.189,0-11.224,5.032-11.224,11.217c0,6.189,5.035,11.225,11.224,11.225
               c6.189,0,11.225-5.035,11.225-11.225c0-1.708-0.406-3.397-1.183-4.947l24.508-26.099c2.533,0.752,5.275,0.555,7.71-0.571
               l20.242,25.814c-1.091,1.771-1.663,3.759-1.663,5.811c0,6.189,5.035,11.225,11.224,11.225c6.181,0,11.209-5.035,11.209-11.225
               c0-2.928-1.168-5.718-3.241-7.817l11.493-24.698c0.118,0.003,0.234,0.018,0.353,0.018c6.205,0,11.235-5.03,11.235-11.235
               S168.028,163.339,161.823,163.339z"
            />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Offer Incentives",
    points: [
      "Consider offering closing cost assistance or including appliances to entice buyers.",
    ],
    icon: (
      <svg
        className={styles.svgStyle}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 256 173"
      >
        <path
          d="M128.3,56.9c15.2,0,27.4-12.2,27.4-27.4S143.5,2,128.3,2c-15.2,0-27.4,12.2-27.4,27.4C100.9,44.7,113.2,56.9,128.3,56.9z
                M64.6,136.3H15.3c-16,0-16.9-24.4,0.3-24.4h42.7l24.5-36.1C90,66,98.3,61.3,109.9,61.3h36.5c11.7,0,19.9,4.3,27.1,14.6l24.6,36.1
            h43c17.2,0,16.2,24.4,0.6,24.4h-49.3c-3.9,0-8.6-1.4-11.4-5.6l-18.8-26.8l-0.1,67.2H94.8l-0.1-67.2l-18.8,26.8
            C73.2,134.9,68.5,136.3,64.6,136.3z M31,98.5c16,0,29-13,29-29s-13-29-29-29S2,53.5,2,69.6C2,85.6,15,98.5,31,98.5z M29.4,72
            c-5.3-1.9-8.6-4.6-8.6-9.3c0-4.4,2.9-7.9,8.3-9v-4.8h4v4.6c3.3,0,5.7,0.7,7.5,1.6l-1.6,5.7c-1.3-0.5-3.5-1.5-6.4-1.5
            s-4.6,1.5-4.6,2.9c0,2,1.9,2.8,5.9,4.4c5.5,2,8,4.8,8,9.3s-2.8,8-8.7,9.3v4.6h-4v-4.4c-3.5,0-7-0.9-8.6-1.9l1.5-5.9
            c1.9,0.9,4.8,2,7.9,2c3.3,0,5-1.5,5-3.5S33.2,73.5,29.4,72z M225,40.5c-16,0-29,13-29,29s13,29,29,29c16,0,29-13,29-29
            S241,40.5,225,40.5z M236.5,86.2l-11.5-6l-11.4,6l2.2-12.7l-9.3-9l12.8-1.9L225,51l5.7,11.6l12.8,1.8l-9.2,9L236.5,86.2z"
        />
      </svg>
    ),
  },
  {
    title: "Ensure a Smooth Inspection",
    points: ["Fix minor issues before listing to prevent delays in closing"],
    icon: (
      <svg
        className={styles.svgStyle}
        width="150px"
        height="150px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43 33V19H5V41C5 42.1046 5.89543 43 7 43H24"
          stroke="#000000"
          strokeWidth="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"
          stroke="#000000"
          strokeWidth="4"
          stroke-linejoin="round"
        />
        <path
          d="M16 5V13"
          stroke="#000000"
          strokeWidth="4"
          stroke-linecap="round"
        />
        <path
          d="M32 5V13"
          stroke="#000000"
          strokeWidth="4"
          stroke-linecap="round"
        />
        <circle
          cx="30"
          cy="32"
          r="7"
          fill="#2F88FF"
          stroke="#000000"
          strokeWidth="4"
        />
        <path
          d="M36 37L42 42"
          stroke="#000000"
          strokeWidth="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

function PointsBlock({}: Props) {
  return (
    <div className="w-full">
      {/* <h2 className='text-[22px] text-center font-bold mb-[20px] '>How do I Sale My House?</h2> */}
      <div className="flex flex-col md:flex-row justify-between w-full mb-[16px]  md:mb-[26px] ">
        <div className="flex flex-wrap gap-[10px]">
          {commonLinks.redirections.map((eachOne: any) => {
            return (
              <Link
                prefetch={false}
                rel="noopener noreferrer"
                key={eachOne.name}
                href={eachOne.link}
              >
                <p className=" bg-gray-400 text-[10px] md:text-[12px] cursor-pointer text-white p-[2px] px-[4px] md:px-[6px] ">
                  #{eachOne.name}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="flex space-x-6 mt-[10px] gap-[10px] md:gap-[16px] md:mt-0 items-end justify-end max-h-[32px] ">
          {commonLinks.socialIcons.map(({ name, icon, link }) => (
            <Link
              prefetch={false}
              rel="noreferrer"
              key={name}
              href={link}
              className="text-white hover:text-gray-300 !m-0"
              target="_blank"
            >
              <span className="sr-only">{name}</span>
              {icon}
            </Link>
          ))}
        </div>
      </div>

      {allPoints.map((eachPoint: any, index: number) => {
        return (
          <div
            key={eachPoint.title}
            className={`group flex justify-start items-start w-full gap-[20px] mb-[30px] ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            } 
                    relative overflow-hidden transition-all duration-500 hover:bg-gradient-to-r from-gray-100 to-gray-300 bg-[length:200%_200%] hover:shadow-lg rounded-[100px] md:rounded-[150px] border-solid border-t-[2px]
                `}
          >
            <div
              className={`h-[100px] w-[150px] md:h-[150px] md:w-[200px] p-[10px] shadow-md bg-gradient-to-r ${
                index % 2 !== 0
                  ? "rounded-r-[100px] md:rounded-r-[150px] from-gray-500 to-[#cccccc]"
                  : "rounded-l-[100px] md:rounded-l-[150px] from-[#cccccc] to-gray-500"
              } `}
            >
              {eachPoint.icon}
            </div>
            <div
              className={`w-full flex flex-col justify-start items-start pt-[6px] max-h-[100px] md:max-h-[150px] overflow-y-auto ${
                index % 2 !== 0 ? "text-right" : "text-left"
              } `}
            >
              <h3
                className={`w-full font-bold text-gray-700 text-[14px] md:text-[16px] xl:text-[20px] mb-[4px] md:mb-[10px] ${
                  index % 2 !== 0 ? "text-right" : "text-left"
                } `}
              >
                {eachPoint.title}
              </h3>
              {eachPoint.points.map((eachOne: any, ind: number) => {
                return (
                  <p
                    key={`points_${ind.toString()}`}
                    className={`w-full text-gray-600 font-normal text-[12px] md:text-[14px] xl:text-[16px] ${
                      index % 2 !== 0 ? "text-right" : "text-left"
                    } `}
                  >
                    {eachOne}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PointsBlock;
