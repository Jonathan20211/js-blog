import imagem from "../../assets/Net2.jpg";
import "./home.css";

export default function Home() {
    return (
        <div className="container-home">
            <div className="home-img">
                <img
                    src={imagem}
                    alt="Imagem relacionada à área de TI"
                />
            </div>
            <div className="home-texto">
                <div className="home-titulo">HISTÓRIA</div>
                <div className='home-linha'></div>
                <div className="home-descricao">
                    <p>
                        Meu nome é Jonathan da Silva, nasci em Venda Nova do Imigrante, Espírito Santo, em maio de 1992.
                        Nasci surdo, porém minha família não sabia. Aos 2 anos de idade foi quando começaram a perceber que eu não estava desenvolvendo
                        a língua oral. Minha família interagia e falava oralmente bastante, e foi aí que notaram
                        que eu não estava desenvolvendo a linguagem.
                    </p>
                    <p>
                        Me levaram ao médico, que diagnosticou a surdez, encaminhou minha família para buscar fonoaudiólogo e fazer o uso
                        do aparelho auditivo também. O aparelho auditivo não me ajudou muito porque eu não ouvia
                        palavras, apenas barulhos do ambiente (por exemplo: carro, caminhão, bomba, portas etc.).
                    </p>
                    <p>
                        Minha família não sabia sobre a Língua de Sinais. Aos 4 anos, me matricularam
                        pela primeira vez em uma escola regular onde o ensino era oralizado. Foi bem difícil,
                        eu não sabia qual era meu nome e nem como falar. Eu fiquei bem triste
                        porque tinha muitas dificuldades em aprender. E falar meu nome "Jonathan" era muito difícil.
                        Minha mãe me ensinava em casa e não tinha muito sucesso. Fui conseguir oralizar
                        meu nome com 5 anos e minha família ficou bem feliz.
                    </p>
                    <p>
                        Aos 7 anos de idade, já no ensino fundamental, não acompanhava os conteúdos pois não havia comunicação,
                        nem com os professores e nem com os colegas. A disciplina que eu conseguia desenvolver um pouco era matemática,
                        devido a ser exatas e à didática mais visual. Já as outras disciplinas não tinham tanto sucesso.
                        Só aos 14 anos de idade que fui ter contato, pela primeira vez, com a Língua de Sinais — comecei a aprender, e aí muitas portas se abriram pra mim.
                    </p>
                </div>
            </div>
        </div>
    )
}