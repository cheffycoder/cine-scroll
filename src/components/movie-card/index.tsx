import React from "react";

import { tMovie } from "@components/year-section";
import { Text } from "@base";
import { bemClass } from "@utils";

import "./style.scss";

const blk = "movie-card";
const MovieCard = ({
  movie: { id, title, backdrop_path, release_date, overview, poster_path },
}: {
  movie: tMovie;
}) => {
  return (
    <li className={bemClass([blk, 'container'])}>
      <div className={bemClass([blk, {}, 'box-hover-effect'])}>
      <div className={bemClass([blk, "poster"])}>
        <img
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          height="100%"
          width="100%"
        />
      </div>
      <div className={bemClass([blk, "info"])}>
        <Text tag="h2" typography="xxl" color="primary" fontWeight="bold" className={bemClass([blk, "title"])}>{title}</Text>
        <Text tag="h3" typography="s" className={bemClass([blk, "release-date"])}>{release_date}</Text>
        <Text
          tag="p"
          color="gray-darker"
          typography="s"
          className={bemClass([blk, "desc"])}
        >
          {overview}
        </Text>
      </div>
      </div>
    </li>
  );
};

export default MovieCard;

/*

#tomb{
  box-shadow: 0px 0px 150px -45px rgba(19, 160, 134, 0.6);
  &:hover{
    box-shadow: 0px 0px 120px -55px rgba(19, 160, 134, 0.6);
  }
}

.tomb_back{
  background: url("https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png");
}

*/

/*

.movie_card{
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 100px auto; 
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  &:hover{
    transform: scale(1.02);
    transition: all 0.4s;
  }
  .info_section{
    position: relative;
    width: 100%;
    height: 100%;
	  background-blend-mode: multiply;
    z-index: 2;
    border-radius: 10px;
    .movie_header{
      position: relative;
      padding: 25px;
      height: 40%;
      h1{
        color: #fff;
        font-weight: 400;
      }
      h4{
        color: #9ac7fa;
        font-weight: 400;
      }
      .minutes{
        display: inline-block;
        margin-top: 10px;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid rgba(255,255,255,0.13);
      }
      .type{
        display: inline-block;
        color: #cee4fd;
        margin-left: 10px;
      }
      .locandina{
        position: relative;
        float: left;
        margin-right: 20px;
        height: 120px;
        box-shadow: 0 0 20px -10px rgba(0,0,0,0.5);
      }
    }
    .movie_desc{
      padding: 25px;
      height: 50%;
      .text{
        color: #cfd6e1;
      }
    }
    .movie_social{
      height: 10%;
      padding-left: 15px;
      padding-bottom: 20px;
      ul{
        list-style: none;
        padding: 0;
        li{
          display: inline-block;
          color: rgba(255,255,255,0.4);
          transition: color 0.3s;
          transition-delay: 0.15s;
          margin: 0 10px;
          &:hover{
            transition: color 0.3s;
            color: rgba(255,255,255,0.8);
          }
          i{
            font-size: 19px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .blur_back{
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%; right: 0;
    background-size: cover;
    border-radius: 11px;
  }
}

@media screen and (min-width: 768px) {
  .movie_header{
    width: 60%;
  }
  
  .movie_desc{
    width: 50%;
  }
  
  .info_section{
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }
  
  .blur_back{
    width: 80%;
    background-position: -100% 10% !important;  
  }
}

@media screen and (max-width: 768px) {
  .movie_card{
    width: 95%;
    margin: 70px auto; 
    min-height: 350px;
    height: auto;
  }
  
  .blur_back{
    width: 100%;
    background-position: 50% 50% !important;  
  }
  
  .movie_header{
    width: 100%;
    margin-top: 85px;
  }
  
  .movie_desc{
    width: 100%;
  }
  
  .info_section{
    background: linear-gradient(to top, rgb(20, 20, 19) 50%, transparent 100%);
    display: inline-grid;
  }
}

*/
