import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Search from './components/Navbar/Search';
import NumResult from './components/Navbar/NumResult';
import Box from './components/Main/Box';
import AnimeList from './components/Main/AnimeList';
import AnimeDetail from './components/Main/SelectedBox/AnimeDetail';
export default function App() {
    const animesData = [
        {
            mal_id: 21,
            title: 'One Piece',
            year: 1999,
            image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
            score: 7.71,
            synopsis:
                'Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.',
        },
        {
            mal_id: 20,
            title: 'Naruto',
            year: 2002,
            image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
            score: 9.71,
            synopsis:
                "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
        },
        {
            mal_id: 269,
            title: 'Bleach',
            year: 2004,
            image: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg',
            score: 8.71,
            synopsis:
                "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant.",
        },
        {
            mal_id: 31964,
            title: 'Boku no Hero Academia',
            year: 2016,
            image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
            score: 3.71,
            synopsis:
                'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
        },
        {
            mal_id: 32657,
            title: 'One Punch Man',
            year: 2015,
            image: 'https://m.media-amazon.com/images/I/81xD4QJzGtL._AC_UF1000,1000_QL80_.jpg',
            score: 5.71,
            synopsis:
                'The seemingly ordinary and unimpressive Saitama has a rather unique hobby: genjutsu. This is due to his passion for the "Punch" ability, as well as his need for personal defense. It is also  due to his frequent conflicts with those who want to be Saitama even though this is not his strong point.',
        },
        {
            mal_id: 153,
            title: 'Dragon Ball Z',
            year: 1989,
            image: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/akurat/images/2023/07/big/img_64ae863698f092-29452700-91179715.jpg',
            score: 7.71,
            synopsis:
                'Dragon Ball (ドラゴンボール, Doragon Bōru) adalah sebuah manga dan anime karya Akira Toriyama dari tahun 1984 sampai 1995. Albumnya terdiri dari 42 buku dan di Indonesia diterbitkan oleh Elex Media Komputindo. Sebelumnya Dragon Ball juga pernah diterbitkan oleh Rajawali Grafiti.',
        },
        {
            mal_id: 207,
            title: 'Boruto',
            year: 2017,
            image: 'https://upload.wikimedia.org/wikipedia/id/d/db/Boruto_manga_vol_1.jpg',
            score: 8.71,
            synopsis:
                'Boruto: Naruto Next Generations[a] adalah sebuah seri manga asal Jepang yang ditulis oleh Ukyo Kodachi dan Masashi Kishimoto dan diilustrasikan oleh Mikio Ikemoto. Manga ini dimuat berseri dalam majalah Weekly Shōnen Jump terbitan Shueisha pada Mei 2016, sebelum dipindahkan ke majalah lain milik Shueisha bertajuk V Jump pada Juli 2019. Pada November 2020 Kodachi mengundurkan diri, dan digantikan oleh Kishimoto. Boruto juga merupakan cerita spin-off dan sekuel dari manga Naruto karya Masashi Kishimoto, yang mengisahkan kehidupan putra Naruto Uzumaki, Boruto Uzumaki, dan teman-temannya.',

        },
        {
            mal_id: 1,
            title: 'Juju Kaisen',
            year: 2018,
            image: 'https://upload.wikimedia.org/wikipedia/id/4/46/Jujutsu_kaisen.jpg',
            score: 9.71,
            synopsis:
            'Jujutsu Kaisen (Jepang: 呪術廻戦, terj. har. "Pertarungan Sihir") adalah sebuah seri manga shōnen asal Jepang yang ditulis dan diilustrasikan oleh Gege Akutami. Manga ini dimuat berseri dalam majalah Weekly Shōnen Jump terbitan Shueisha sejak Maret 2018, dan telah diterbitkan menjadi dua puluh empat volume tankōbon per Oktober 2023.'
        },
        {
            mal_id: 11,
            title: 'Hunter x Hunter',
            year: 2006,
            image: 'https://s3-ap-southeast-1.amazonaws.com/ebook-previews/53976/201703/1.jpg',
            score: 8.71,
            synopsis: 'Hunter x Hunter (日语: ハンターリンクゥー, Hepburn: Hunter x Hunter) is a Japanese manga series written and illustrated by Yoshihiro Togashi.'
        },
        {
            mal_id: 12,
            title: 'Pokemon',
            year: 1999,
            image: 'https://m.media-amazon.com/images/M/MV5BNDcwZDc2NTEtMzU0Ni00YTQyLWIyYTQtNTI3YjM0MzhmMmI4XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg',
            score: 6.31,
            synopsis:
            'Pokemon (Japanese: ポケットモンスター, Hepburn: Pokemon) is a Japanese media franchise created by Satoshi Tajiri.'
        }
    ];
    const [animes, setAnimes] = useState(animesData);
    const [selectedAnime, setSelectedAnime] = useState(animes[0]);
    function handleSelectedAnime(id) {
        const newAnime = animes.filter((anime) => anime.mal_id === id);
        setSelectedAnime(newAnime[0]);
    }
    return (
        <>
            <NavBar>
                <Search animes={animes} setFilteredResults={setAnimes} />
                <NumResult animes={animes} />
            </NavBar>
            <Main>
                <Box>
                    <AnimeList animes={animes} onSelectedAnime={handleSelectedAnime} />
                </Box>
                <Box>
                    <AnimeDetail selectedAnime={selectedAnime} />
                </Box>
            </Main>
        </>
    );
}
