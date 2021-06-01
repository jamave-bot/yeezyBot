import React, { Component } from 'react'

export default class YeezyQuote extends Component {

    yeezyImages = [
        'https://s.yimg.com/ny/api/res/1.2/Zl9Qk4AFbTzGojDjs04f.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/uu/api/res/1.2/LcVbfNrse6J1d7PFgcEpGA--~B/aD04MTA7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/f33bec7eecb511edebd79fda41314589',
        'https://s.yimg.com/ny/api/res/1.2/IiglimaQOMAtFlFeUmPRYA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/uu/api/res/1.2/6IbH1nMFkBaS1Ny_ChFFXg--~B/aD04MTA7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/68c108dbca1fc6a651535a1b01fe4867',
        'https://s.yimg.com/ny/api/res/1.2/3YBZRcdl.uTwECQVhDiN6A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM5Ni41NjI1/https://s.yimg.com/uu/api/res/1.2/AzdCZg3_ClJ.QgqFYucD5A--~B/aD01NzY7dz0xMDI0O2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/thegrio_yahoo_articles_946/b4b8cb5f79add4b05828254a12b3c5a6',
        'https://s.yimg.com/ny/api/res/1.2/Y7fC6v918ZDtcyeji.xb5g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwMi43OTcyMDI3OTcyMDI4/https://s.yimg.com/uu/api/res/1.2/kLgF3UgLl7Tu6PzcoH3irA--~B/aD0xMDgwO3c9MTcxNjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/complex584/f90e3d90857d0407ff626fa42ed9012b',
        'https://s.yimg.com/ny/api/res/1.2/T1wJLbiE1vW9FFy94Nxh1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MC4zODcwOTY3NzQxOTM1/https://s.yimg.com/uu/api/res/1.2/CR0ydDmO1r7xe_N63A.MeA--~B/aD0zNDk7dz02MjA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/quartz.com/7ce9ae0c8519da811330ac33973f5e4d',
        'https://s.yimg.com/ny/api/res/1.2/xKhhsoZoFrJKkDJ480ON4w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcyMA--/https://s.yimg.com/uu/api/res/1.2/e_.93Nq80Z6dwMDJ96Y7VQ--~B/aD0xMDgwO3c9MTQ0MDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/sheknows_79/3cd450e0fffae30d54e6abcbfd3e594c',
        'https://pagesix.com/wp-content/uploads/sites/3/2019/04/gettyimages-1076483808.jpg?quality=80&strip=all&w=618&h=410&crop=1',
    ]

    
    
    state={
        quote: '',
        imageUrl: 'https://s.yimg.com/ny/api/res/1.2/Zl9Qk4AFbTzGojDjs04f.A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MA--/https://s.yimg.com/uu/api/res/1.2/LcVbfNrse6J1d7PFgcEpGA--~B/aD04MTA7dz0xNDQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/newsbytes_319/f33bec7eecb511edebd79fda41314589'
    }
    
    componentDidMount(){
        fetch('https://api.kanye.rest/')
        .then(res=>res.json())
        .then(quoteObj => {
            this.setState({
                quote: quoteObj.quote
            })
        })
    }
    
    handleClick = () =>{
        fetch('https://api.kanye.rest/')
        .then(res=>res.json())
        .then(quoteObj => {
            var imageUrl = this.yeezyImages[Math.floor(Math.random() * this.yeezyImages.length)];
            this.setState({
                quote: quoteObj.quote,
                imageUrl: imageUrl
            })
        })

        
    }
    
    render() {

        return (
            <div className='at-container'>
                <h2 className='at-item'>{this.state.quote}</h2>
                <br></br>
                <button onClick={this.handleClick}>Change quote</button>
                <br></br>
                <img src={this.state.imageUrl} alt='yeezy'></img>
            </div>
        )
    }
}
