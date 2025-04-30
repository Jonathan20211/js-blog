import "./perfil.css";

import imagem from "../../assets/hardware2.jpg";

export default function Perfil() {
    return (
        <div className="conteinar-perfil">
            <div className="perfil-img">
                <img
                    src={imagem}
                    alt="Imagem relacionada à área de TI"
                />
            </div>
            <div className="perfil-texto">
                <div className="perfil-titulo">PERFIL</div>
                <div className="perfil-linha"></div>
                <div className="perfil-descricao">
                    Graduado em Sistemas de Informação pelo Instituto Federal de Educação, Ciência e Tecnologia
                    do Espirito Santo (IFES) - Campus Cachoeiro de Itapemirim-ES. Tecinico em Informática pelo
                    Institulo Federal de Educação, Ciência e Tecnologia do Espirito Santo (IFES) - Campus Cachoeiro
                    de Itapemirim-ES. Tem experiência na área de Sistemas de Informação, Desenvolvimento Web básico com ReactJs, NodeJs e Mysql.
                    Também área de Informática, atual como formatação, backup de arquivos, programas, revisão com computadores e notebooks.
                </div>
                <div className="perfil-formacao-academica">FORMAÇÃO ACADÊMICA</div>
                <div className="pefil-formacao-curso">2013–2015: Curso Técnico em Informática, Instituto Federal do Espírito Santo – IFES</div>
                <div className="pefil-formacao-curso">2017–2023: Curso Superior em Sistemas de Informação, Instituto Federal do Espírito Santo
                    – IFES</div>
                <div className="perfil-formacao-academica">EXPERIÊNCIA PROFISSIONAL</div>
                <div className="pefil-formacao-curso">
                    PREFEITURA MUNICIPAL DE VENDA NOVA DO IMIGRANTE<br />
                    Cargo: Contrato - (SECRETARIA MUNICIPAL DE EDUCAÇÃO)<br />
                    Período: 07/2024 à 12/2024<br /><br />
                    Principais atividades: Auxiliar com a manutenção e instalação de software, instalar e reinstalar os
                    equipamentos de informática e softwares adquiridos pela Prefeitura, auxiliar os usuários de
                    microcomputadores na escolha, instalação e utilização de softwares, tais como sistemas
                    operacionais, rede local, aplicativos básicos de automação de escritório, editores de texto, planilhas
                    eletrônicas e softwares de apresentação e de equipamentos e periféricos de microinformática, nos
                    diversos setores da Prefeitura, fazer a limpeza e a manutenção de máquinas e periféricos instalados
                    nos diversos setores da Prefeitura, controlando o estoque de peças de reposição, preparar relatórios
                    e laudos técnicos.
                </div>
                <div className="pefil-formacao-curso">
                    CENTRO EDUCACIONAL DEOLINDO PERIM<br />
                    Cargo: Estagiário <br />
                    Período: 03/2022 à 12/2022<br /><br />
                    Principais atividades: Auxiliar com a manutenção e instalação de software, incluindo sistemas
                    operacionais e desenvolvimento web.
                </div>
                <div className="perfil-formacao-academica">HABILIDADES</div>
                <div className="pefil-formacao-curso">
                    Fácil adaptação e relacionamento interpessoal;<br />
                    Comunicativo;<br />
                    Comprometido com horários e tarefas;<br />
                    Dinâmico.
                </div>
                <div className="perfil-formacao-academica">SOBRE MIM</div>
                <div className="pefil-formacao-curso">
                    Meu nome é Jonathan da Silva, sou surdo e tenho 32 anos. Moro em Venda Nova do
                    Imigrante. Sou formado no curso técnico em informática em 2015. Concluí o curso superior em
                    sistemas de informação em 2023 no IFES em Cachoeiro de Itapemirim.
                    Eu aprendi que não consigo encontrar palavras, porém, aprendi a me comunicar com meus amigos
                    surdos(as) e ouvintes também.
                    Tenho como objetivo atuar profissionalmente na área de informática, oferecer um serviço de
                    qualidade e excelência, colocando em prática tudo o que aprendi e desenvolvi, ao longo de anos de
                    estudo e dedicação.
                </div>
            </div>
            <div className="perfil-experiencia">
                <div className="perfil-experiencia-card">
                    <p>Experiência Profissional Básica:</p><br />
                    <div>
                        Formatação e Instalação (Windows e Linux)<br />
                        Instalação de Programas<br />
                        Backup de Arquivos<br />
                        Instalação e Configuração de Impressoras<br />
                        Assistência e Suporte na Compra (Desktop e Notebook)<br />
                        Verificação de Antivírus<br />
                        Instalação básica de cabeamento de rede e configuração de rede
                    </div>
                </div>
                <div className="perfil-experiencia-card">
                    <p>Desenvolvimento Básico:</p><br />
                    <div>
                        FrontEnd ReactJs – Blog, Escolas, etc.<br />
                        Obs.: exeto loja virtual
                    </div>
                </div>
                <div className="perfil-experiencia-card">
                    <p>Experiência na Área de Administração Básica:</p><br />
                    <div>
                        Administração Financeira<br />
                        Microsoft Office Excel<br />
                        Administração da Produção e Logística
                    </div>
                </div>
            </div>
        </div>
    )
}
