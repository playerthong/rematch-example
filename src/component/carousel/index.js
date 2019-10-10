import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import {styles} from './styles' 
import { withStyles } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}; 
const data = [
    {
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMVFRUVFxYXFRgXFhcYFxUYFRcWFhUXGBcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EAEIQAAEDAgQDBAcGBAUDBQAAAAEAAhEDIQQSMUEFUWETInGBBjKRobHB8BQjQlLR4WJysvEHM3OCkhWiwhckQ2OT/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACoRAAICAgIABgEEAwEAAAAAAAABAhEDIRIxBBMiQVFhkRQygdFxobEF/9oADAMBAAIRAxEAPwDqMJVBEHVWrYeVhYTE6EG4W/hqs3XLODi7R24M6yKhIMgptjZRq+HBuNVSg3bUpXK1ZWMeLoVxFEJWrQkQn6tigHoqxbonNKzDr0CEJjCJ5FblSjI0SWSLEKylZxzxU7MfGUQQhMpCFoV2cwppYUOaQCmvRz8LloQLZkDx9mqmk4gwmG0Sw6JbH0yLhDvRS3Fcg2YXHJThwAUph3GLi+6dwrZ0QaorCfKmXMzYpqkSRdLuaAU1RulkWg9nqVuq0MOyeiRywn8I/aFz5OjrwvdBaGHkqcRTTLWwJSWKqu2XJts7lpCVenElYuOdPitSt2rjGySdh3zoCei6sars48zvSEGFxEHyQK1M6Qn3NcNVRrpC6UcUl7Geyki5DyTnYKewKayfFkUyQtvh2Oixt1WY143CfoYZrx3HX5FPkSfZ4/hZyi/Szo8JiA8WKIaftXP4YvpTIcDsdj0Wnh+LNdZ1iuSWFp+k9zF4uLVT0xqq1KvpxsngZvqOapUppYui79QkwHxQa6eNLdBqMlVTTJSTSozsRTBHIpZjQItHPqnzAs5VNGVQ52rdoBi6dgdVj8Sk3mAtxxtBWZVZOYLR0LmdqhHDUpCMxuU2KvhWQFXJJ1TPsSGooM4prCMJsEJlFNYdpalfReF8rY0MImaDYV8M/nqmGtXJN/J6ONL2KPNkhXqXstKrSss+phnFQVWdW6M3EOIJMpVtcnf2LXdgOaWfhA3RdEZI5pxlZn9mSLlVbhE/UPggk8lVNnPKMQNRoAQcyvVBOyF9ndyTJEpP4JqU4QmuIMiQVsYjBuGoWfWoLtg0z5DPjnjfQ1R4q6IOvuPinGYljxcQ7fkVhBiMwlCWNexbB47J1LZ1GAxIiAYvprZaTYIsuNpVnDQrZwPFbQ7X4rmyYvg9vwvjYvUjWc1CdbZWpYtj9DBVqjVz1T2elyUlpirmNOyqKI8FXEUDq0qKNY/i9v6q1a0c/OpVJAsRQKyq1P27rpXgELG4hTynxWhITPClYpgWAy3WVLaIB0RMGw5pWhXoiA6Oh8ea0nTDhjcBYU7KaTb3RgwK7WJbOihynRB0TtKkBqkaVSE0K1lzTOvGMOaECo3kvOrKhBPRc51LooaaXfRHJMdmeaUxDyPxqsWSkK1KASr6InRWq1L6yhVX8ldNkGkzz6YQsnRSJXsp5puRPgdOxwIuh1MBTdtBV8ll4SNVRKujjnUl61Zk4/gpFwLLJfhnN1C7alW5quIwLXDRPHO1qRw5f/MhN8sZxrGq+VaOKwBabBJuYrWn0cTxyg6kWw9QhbFCrI1WKGpmjUjTVTmrO3w+Rp0abpQHVgLEWVqOJDhexVcQGkKaOuTbVoPTDSNUlxJshAoOIdY25K9Vxm+6NUwOfKFNA8CbmVoB4LCs4NITTTDFpKw4ZtKiBMKva7KtCvqCh1Kt0KH560PU3oySpvH9lcViLnRRmjsxP5G6TzyTAcOaQoVSdLopE7LmktnbF6DVaqRqgE3Vn0z4IbqThvKy0YFUptCVqMCdc3mEM0xyRUqM42LNogc1KjEVYSf2kqiTZKUoxdHSU8Y4aiUzTxrDYghRXwfK/wBckq6jC7Kiz59TywNF1Brx3T7ENvaU9Ljkq4SoBqfOPmnXX0g+9TetHXCSmr9/oltRjhexSeL4e03sEVrI2RmuB2WWuhpLmqkjFPDHbXCE7Dkahb5ot1iJQK7JHMeC3mk/0lK0Y1SBYBS1jtQEbENyoDq8fVk9CcuOmEAG4go+RrhCRGNGjoRc24QeisGpFjQI1VmskItJwOqLUbAlK5FFBIzatHKZHmhmm3mmn1ekeSzMQTN5TLYr9PRo06jYgLzqcrPo+ada7ooyjTOvHO1smmCDZH7d26A2Z0RTO9lNxssp0X7UlDL1HaHSVAp9QlcR1OzxStaomKg6pKqzxWjGzTnQjiapSsnqtIUR1V/szefuK6E0jilcnZ3bqbT+FL1MM1NPgID3pro5Ur7FvsoV2U26QryqlqDkNHHXSLwokIZlQXlJV+5VSr2LOPilMSSP3TGbmFR1MHmgl8jN30ZGIw5NwSfNKPaBqDb60W47ANPihuwE2LjHkrKaOWeJvZzr3To0o+Grltvmtr/preZQavBaZ2I8EzmmLHFKLsS+0DZR9vcN09T4QzqEHF8JcYywfckuJ0eoVGMedL/XJCeXG5CI/DOYdp81R1F7vWn2StZqshnS/gmqLTvHmUr9njc+xWzcyUHsZNofqOA1cD/KUpVrD6KXc7kvMouOiFIZSYUGVDmkJyhw5+494TQ4X1Km2iyZklyHm5StocOE6yjHCN+gP0S8kg9mGByCtkctsYcBT2I+pSuY6iaFSqhl6z34pQMUh5jE8kfJUZkmMQp7dbzGHyRvOql6W7ZJ8WqfcVf9Op/QUOVm8ujUFSVYOXDeglX/ADAHS0NbbaefsXXdojJuLoEYqSsczKC9K9qhYzFBtN7nGA1riSdoGqykzOCH8ygvSWFxIcxrgQQWggjQgjVENTkjzB5YQgk6uHsPxVK4JsHeVv0Sju0mwZ7/ANVWqa8es0fXVMn9iuP0Heyro0COse6EN+Grc/f8ikHNq71HeUqhbV/M8+Z/VUp/KJ39M1Bh6uhuPJRWwBOzfIQsvsav8XvRGU6w0Lgt/If4HafDiOS4bjX+Ir6NV1OlhwMhh3aEhxIse6NB5mV1OOdUZTc+o52Vok3JJ8ANSuC9KX4TE0TXpumqwQROV0SAM7XCTBNsvPWAYbFFN+rZPNKSj6dH070e4sMTh6dbKWZ2zlOxBIN4EiRY7iFoPrtGpHtXyj/DTFPqCpQLyGsh7ByzE5wOkwfMr6FTwg/E4nzUcsVCTTZfDJ5IKSRo/a2fmCsKwOhSjKLBoETMFCUl7HRGAcvUZku6qFXtwktj8Uc+MSevtRBiDzKKKdH84/5BZfpL2XYDK8f5lOYdsHSdPBekoxejzHkmlZq0655ojsY1phz2tOvecBaYm/Uhc3wLH4em/EvcXEVKssygkubfvRsII1WDxit2uLu4lslrSPyZ3FseRCKwpsR+JklZqcI9ITTr12kuqS4imM/dnO7c2aI36LV4h6TUhhy2qclSrTqgMAc6D3mgEgeF/Fcvx7hYollWm98utBibCRceKR4xhqw7F1RjxAIBc0w7NL5B3sQn8uD2I804po3v8Oq+V7wTBNmjmbOj2NcV3ZrFfGcPXcA9otLpnwjn4rquG+mjmtax7A/K2C5zjme4kwbaC4EIZMNuzYvEcVxO6NfmluJY1jaTy8wII53dYBcLxziLcS2kXsGdvdePwmA45gCbC6zhXyMfTBDWvglomJa4EEQYmBE9UqwopLxMj6bgMW11NuVwIAAOUgwYFraFH+0LjfRHicPZR0Y95LidSXMIAmPzNb7VqcX48KNcgNzUmth0EXeYNnTaAQEjxK6HWd1ZvDElWFcrjKnpa51T7pkMIsHkTIEm7SevtSHHPSmo9rqRa1gkAlpcSQBmiTpcJlgFfikl2fRO1KyqnpXhmyDVEgwQGv2MH8K430Y9IOxLjkNTOGgAvjLlLr6HmsHEYolzyLS92xMSSeSaPh43sSXi5UqPrfD+M06wmm6dbGxIFpjkm/tC+Q4SriJaadUNhwIGR5MjlFMjyldNg/SN9ChUfiu0c7M0UmvaWl5jvgEtFhzSywJdDw8U32dPxl1J7IrOysDg6c5YJaZuZFui+P8ApFhqDKp7Ct2zTJJj1Sds89/e8DzWthXjHYuo/FF7KbGOfkBPdygAME6HcncjaVnPp0WvyGkXCAWuDi0uBE5i2SOekKuKHAhmy+Yjd/wuH31Y8mAe137L6R264r0Jq4VnaNDzSLy31u6ZE2kyN+Z12XSYnhVY3ZiagHQUnD30/moZknO2dPh5SjjSWx92JVDi+pXP4jhWO/DjP+VGn8R+iQq4Hio0r0nf7Wg/0JVjg/dFHmmvZ/6/s6s4rxUfalxFb/q7eTvAUT8RKX+2cW/K7/8AOl+ibyI/K/Iv6mXw/wADFX0icQQGkTA/Da3e239yza0MYdSfGwBuR8kLCMB9ZzW9SdJ6AEouMpUxIbVFS1i1pHuI5/FdOkzhdtWVoPLSXNBcQ1thO5/huhY6uRDm90gxvI3Qq7XuAjQC+19PNRWo5aQmcwfBEc2kg8/7pkK7o3OC8RfWhryXOYX3g6ODYBi5MgrQ4zU+4qCZsNyYuNiuW4XjCzNeASDpNxMfFVpU3HMTexgXmbR7krjsdT9JHDWy8+2OcRZPYRwY97+zmZ9YWA108khgmOu5oO9wCnqlCoAJmHAGbmAddN/0Rl2JDol+I7So05Q0Ro2QJg3hIcZrFrmxy+aKxmRxAnc3+IVMeGxnLQYgC55+MIqkzNtpheGYslri4CGwLNB9x1N17iHEA5uRt2m5EAQR0Ftku7GsdLadIUmlpLhnc+SBIMu00S7MO/LnjuyRPXw1W4q7Yrm+NIe4ZXDXh0TAPPw2KvxhwcHPaA0Zm5he5MgETtASOH/soxTjl80a2By9NGhw3CueyWg91uZxAnK0G5dy/ZZ1J13AmRm6310C3/RlzuxrtAOZ1GGxzzb9PqFzbJBcDMg38bz4LRe2aS9KZoUGDITHP/42n3xPvWpw7takNGYsZldmf6rBcO1BM2MXlZGHIyG7Zvq8g+7VOcPoB2ckyYbbNM3fJJn6lLIpDdJCzDTpOqjMHFxJmLERpA6kp/0dazFsGEqENrMl2Gedx6z6LuY1I5X5XTxr2sc4AX0uREFo5hY9Gs5jmvYYc05mnkRcfBGuSFvjLfRpYnDuaXNce80kOBIkEWIKLw7jNegfuqhA/LOZvsNl0HpDhW4vDsx1Fvey/fNH8NifFpHmI5Lj3IRaktjTThLR3XDvT8GBXpR/EzT/AIldPguI0K4mlVaemh9hXxuVdryDIJB6KcsEX1orDxUl+7Z9mqYYoPYHkvnvC/TDE0rF2dvJ1/etn/1C/wDpHtUHhyLrZ1R8RifejjxVB8VJkXBVzgQIObKOoJPuTvD8JTc4B7nxBu1sHpGZdjaPPSZnGs/8zvaVFTO4ACTv7lttwNNs9yo65jNk28/D2qvEcIKZpODcheHmJBsMsG2mvuQ5IPB1szxgKtIsdUblDoLbi48Nl1HDKbWA1KzmRUszuzpqYjqRdL4ymK3YipnDBTAJAMzIMCQmKmGkMYZDGF8Ekglt3TdvIe5TlKy0IcWJcVo071mHuyMwygAPdpl6QCsapxF7gGkmATHSStnFU21GiiwOAc5hu4FxIzDkBefcufNGHlpkAEiY5Eifcmh9iZLT0WbWzuOth8LKcYZpeY+KBgvWkA3Hir4k/deY+Ketkk/S2J4axP8AK7+ko2MAEQbwDb1bi9vFCwtPM6ACZBFhfROHhbiJeWsbzJmY2tumb2Ik+NITpPTrcLnbJJAmLc/oj2papgyBYtPQT+ibZUENZcEAT4kyTbpHsQb+AxXyWYyqwDsqpbAIIaXNcRrBjXwWdTBJcTrN55yfaU7VdobEG977DVItMF3j4bnfZGIJmjhpyEDPvplj/ibq+DxAa4kjblE9523mg4YS090ET+QuOgvIM+5L5rk8h1O53PxStXY6dUw3EKuZ5I3A2j8MLMP17E83vPbJ9bKD52SDtUyFk72dZ/h9xTJUdQd6tS7eQcNR5j4BU9LOCdhUzMH3T7t/hO7f06eC5vBPLXAgwQZB3BFwRNp8V9Sw9WnjcMM0Q4Q6L5XjWPA3Up+mVl8S8yHF9ro+YlRKa4lgnUajqb9R7CNiOhSiqQap0eJUSpXljHb+j2D+9JL5hpsRI1Bm+6zBX0vt/wCTlp8CqgPeZ/Afkua+0ARcaD5qKVtnRJ1FGrUrd0X3d8Gpb0oxpmk0E2YNPros7FY7ugMN59kx+iWx1bOA4mSBl8gfcmUdoRz0zseDV20aLS97SXjOMxy2c0CLm8XTTseKjc7S05Gua6DOocWmN7lctxatHYiNKLLm8awl24h4bLHkDSxDSb39XbbyS8L2P5vHRbD8UqNc1xgZSDpe3QolGvmcS2HEmSHAQZubG39klg2BxOc5RvYknome1plwcC2nH83tEAzM89lSiKbfbGKmIcIyl2uocRfSwEAGFSrh2x6p2tmaB43Q6ePDHiXmo2PyDy9aCm8Pj21qjWBuUbTJlw0kNiBE3uhtDKmV4czsi4OOxc2I5GbidvirYjHB+j41u7Qfup4vweGA0zJm4JAABkkkkgaxsszDAtg5QQedpkRGsoaexnyj6egHauLomTsRvKmvUqEzBuZj9N4Wq2qwWjI4EEtixjQtM3KC6tSAJc7MZMSCD7hBv4aJr+hOP2KVTZto5+Fpj6KWnvO8T8SjimKjoYIJ6+/kPMoGSHOBvBInax5jXyTInNj2EaMpJA11LCYt+YXHiqMoF+YNuYEAGZMmythXAA+PMj/uFh4IVGtlqNMZrgwQHAxe4GqAVWi9HC1GvawiHNixIGh2O/kkq9nn+Y/NbeIxjs3aQNWkwMoEQAMtuSxcaIqOH8R98rRb9wzSXRTDnvf2+a6f0S4t2dbsnHu1dJmzxprz09i5ege99fNXxDiCCLHUG/S91pRvQIScXaPovpPwsV6ctH3jPV6jdq+ekQvoHBOKdtRa/wDELP8AEfrquf8ASjh0HtWCx9ccjzUscmvSzpzRUlzRz0r2ZQvKxym7g69UZz3GS2O8TvbYJHF8KqNmXMeGNBljgREDnfcLzwMp7x8NvegPxD79519b6+KX/BR9bLnC5RLiGuDZA52t4FRw6q6Q0QBcm2sD9lXKSCSZJ1M/NRXZklzTcbeNlgN9Mf8ASH/Mb0ps+aRaC4Ek+qPPVoge1H4y/M8HX7tiFEU3HSco98/JZdAl+5jD3MYbDvOG+2hkRpZZtTVFqUXAtc8QHCWydR5LY49wumxjarZBeQC22X1ZJC1pB4tp/RgZvoJ3g7u+Yn1SN/kjYegz7M55aM3aATuBGia4Y6MNU/1W/wBD0JPQYR2vyNVH/d1PL4u8FiGkGjO4h0mANJ30GiLX4lEt2P69Uq7Ez3QBB218+h/daMWgylFng8EzYco2/bVQGgycw1AiLmVJAAdYGYidRrbX39AjOc6mHAEtO5gDTSDEg32jZMTEiALX+BU0+X19dVVzC4jU+PgiYYNkhxjlNv29qYRjWEdY3/7oPkDY+aXb67f7bI9NjhmEO8hYiOWhHWVUYdwh0BpbcBx1FhYfqgMr0HxVQlp8ZiwAuNklxH/MPWD7kz27CLyCNRrJ8UtxD1gdiGrI0gFLX66K2I2VGaq1fZEHsaXozxHsquUnuvseh2K6/EEEEG4Nivm5K7LhOO7SkCfWFj5bqWSO7L4Z64mFxPBmm+Pwm7Sk11GPoh7cp8uhWD9hfyTRetiSjT0VfSdkDpMGdrGDdUY4bjWN0Z1B5A2F4sfnCFWw5aRIE66ymF2HYBldeOnPwUmp3SCAAdZB+KEzGugkZddSLxFkGpiXEguMoBsnEVLi8wAB4BS5zsm8SCeU3hUo4fOdfFaLsGeyGgGYjWZGxtrqs2BK7FKb6jmgNkgXi1p18F0HpQ77il/OP6VkfZ8pA9Zrha34txHsT3pBVmjTB1Drj/aEj20VimouxOkf/aO/1PkF6i+MLUgkHtWxG/dKFSdOHLRcmpMeQXrCg5hIDjUDonbKQj/Yt/8ABJzZOaZWz6NUsPnLsQ7uhpIZlkOJkecWI6rOwLGG1QkQLQdb6aeK0vtdEaUy48yJjTnb3Jn8CR07D484Uta3C03AtdmLnGS6Bp6xy3vss+uczHFzu8MrhYnPa8n8Jg+FotuY4t1S2gNosfMBQ/BwJabAxfY8uuiUo3aMnJKMaGbSBaNTBIvrseitUp3sMruWx6jkVZ9IxeOcE3v01T2TSFWNIO3gD+is6Yn68VeoBeYkn+9kzUoUzRc8Wc0jeS6fgNUGzRWhC4J6x0RscSQwnUi/tQs8wHbdLxqEXGthrOkj3ooDFGG91asbW5qjRdS/TzRB7A3J/g2LyP6OsUg5eCLVmTp2djUchZkrw7E52X1FijqVF7vZn1sSXHKRESTdJ4zEFxuZndep4gudpqhVreSdIk3ZFNVKE5y9K1C2NU8QRbYm4VhiyJAJ0sl6Q6LwZdag2xoY05cpE7zJkHovVsa4tayxDdLD39VOFwb3T925wGmzesn91Z+EaPWqNHRve/b3oUg2xZ1Q8z9dAr06U6STPqgJ6nw6QDTaCCLl50M/lH7ouPa6nTaO01Pqt7oiOmq1h4vsVw+De14e8tpgX75E/wDAST5ha8MILBWbJGY/d90QMwkmC3yBC5/E1g6DEHQxoeRWlhcViH0xSa3uxlLiLEHqbackGgxkrpHsUSHGm4Q7edYixBFsp2S1FjicoJJ1F7e9N457RSZTFTO9jnCQD6p/DfkdPErNc4+xZBk9jzhNnC423HUKjHZSMwkSCDE+0b+CmhjGEBr2ku2IPPRVc8Ekb6eP6LA+0WxzGOh1MFroOa8tP8p5GdDppdImdCCCNR80eocoPI6goWNxb6hBcZywJMZjyzH8XiUVa0LKnv3K/ZXetG4vsiYsksBOuYobsQTfnB106Qi1fU1Bh2o0OiKFfQk3VWebea9RYC4Bzso3MEx5DVWqjuomrQBy80Lzl6nqiAc4dXyO6HVbmcc1zeaEX7UlaseMqF6biNFYyVNLpqvMuiKeFHmVJaNkNztVAcsYOK0GwA6LSY5rOyIY0ueAS50nKSSLN02WSym46BajAHU2sdIcycrtdTcIMKsLxBrspNSpmOzZP17llGsbCxAmJ6p77G3+InmSL/Xii0aYaZAj5eZQToLTbB4J9YNhrbEzJsB7VVzAT97VncBgn3pxzp3nxQpi4tbkPmhY1exD6raZhjGCIhzu8TaZA2VcTUc4NLnE6+sco15boFSpckdNBG27j8lIdYRtOnj+Z2iahG3tA8S7X+Y8uZ2+aAaqtijr/Mdup33S7b6rILYwHgi3n1V6bXTEfXigNMKS7YLALV3G4PeG3RUpkDaVDnnU7qgddEAzQoEmRpyPL9ExVcCHw0NGYWEwLDSboFOvHdOnsKLMh/8AtPuWA3qhCbq5dLUMq2yJijlakLqrl4LGLuIVVC9Kxi7JXg36ChtzCcosAQD2Wp4AblHZQYNkN7il85O6UekPGu0IRxYnRLFFojVY1h+32RzWcdTI5bexIu1TLisZMmoCpN0NUr1CBYoGKVSCdtuvsGyqTYbm/U68tAhUjJjZEYJgbXTk2Dq72m558ylnaps6OO8lJysgsK1smJhSaV4Xmi6kOg2WAFZSzDLuPNUGHIMOBvy+KlhTlIzY3u0eU6LWFIVr079Y9oVqej/BvwV8f67xyMDoIVKP4v5W/BZGkhJy8DZTurPFkRQZXgvFQsE8vLy8sY//2Q=='
    },
    // {
    //     image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    // },
    // {
    //     image: 'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    // }
]
class CarouselComponent extends Component {
    render() {
        const {classes} = this.props
        return (
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                {data.map((ele,index)=> (
                    <Card classes={{root: classes.cardRoot}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={ele.image}
                            title="Contemplative Reptile"
                            />
                            {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                            </Typography> 
                            </CardContent> */}
                        </CardActionArea>
                        <div className={classes.containerIcon}>
                           <div className={classes.containerIconFirst}><AttachFileIcon/></div>
                           <div className={classes.containerIconSecond}><ArrowDownwardIcon/></div>
                        </div>
                    </Card> 
                ))} 
            </Carousel>
        );
    }
}

export default (withStyles(styles, { withTheme: true })(CarouselComponent)); 