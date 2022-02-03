import { users } from "./users"

export const posts = [
    {
    imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960',
    user: users[0].name,
    likes: 1290,
    caption: 'Pic 1', 
    profile_picture: 'https://images.generated.photos/VWtoX0zVvfr_R_ZADv6ygMpEkprxNoxieSfKXG5XXSQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNmY5MDk0/ZjItNjZjOC00Zjhm/LThjYmMtZDhlMzBk/YjI4OTc4LmpwZw.jpg',
    comments: [
        {
            user: users[1].name,
            comment: 'Nice',
            reply: {

            }
        }
    ]

},
{
 
    imageUrl: 'https://www.thehindu.com/entertainment/art/ph95wn/article35362273.ece/ALTERNATES/LANDSCAPE_1200/Dhanya-Ajith2021Artontwitter',
    user: users[1].name,
    likes: 2121,
    caption: 'Caption 2', 
    profile_picture: 'https://www.thehindu.com/entertainment/art/ph95wn/article35362273.ece/ALTERNATES/LANDSCAPE_1200/Dhanya-Ajith2021Artontwitter',
    comments: [
        {
            user: '',
            comment: '',
            reply: {
                
            }
        }
    ]

}
]