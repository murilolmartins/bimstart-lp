import Image from 'next/image';
import Link from 'next/link';

export const blogPost1 = {
    id: 1,
    content: (
        <div className="article-content" key="post_1">
            <ul className="entry-meta">
                <li>
                    <i className="fa-solid fa-calendar-days"></i> 08 Abril, 2024
                </li>
            </ul>

            <p>
                Nos últimos 20 anos, com a intensificação da aquisição de
                veículos no Brasil, as vagas de garagem nas grandes capitais
                tornaram-se mais valiosas do que se podia imaginar.
            </p>
            <p>
                De acordo com o Mapa da Motorização Individual no Brasil,
                desenvolvido pelo Observatório das Metrópoles em sua edição de
                2019, entre os anos de 2008 e 2018, o total de automóveis no
                Brasil aumentou de 37,1 milhões para 65,5 milhões. Deste número,
                cerca de 40% do referido crescimento acontece nas 17 principais
                metrópoles do país, o que desencadeia problemas de trânsito, bem
                como o aumento da demanda por vagas em estacionamentos e
                garagens.
            </p>

            <p>
                Todavia, além de os edifícios mais antigos das cidades
                brasileiras não terem sido projetados contabilizando uma grande
                necessidade de vagas de garagem - devido ao diferente cenário da
                época -, a urbanização acelerada diminui cada vez mais a
                presença de terrenos vazios que funcionam como estacionamentos,
                os quais gradativamente acabam sendo adquiridos por
                incorporadoras e transformados em novos empreendimentos, cujas
                vagas são fisicamente limitadas pelo potencial construtivo.
            </p>
            <br />
            <p>
                Tal problemática chama a atenção das mais diversas
                incorporadoras do país, que precisam tentar extrair o maior
                número possível de vagas em suas edificações. Do outro lado da
                mesa, o cliente que comprou o imóvel na planta, espera que as
                vagas sejam entregues com rigor dimensional, conforme o projeto
                vendido. Expectativa essa, que muitas vezes pode ser frustrada
                por problemas construtivos em contenções e elementos estruturais
                durante a fase de execução. Existem, inclusive, relatos de
                grandes empresas que perderam processos milionários na justiça
                pois acabaram entregando vagas menores do que o acordado em
                contrato.
            </p>

            <br />
            <br />

            <p>
                Fundada em 2018, a BIM START é uma empresa brasileira que atua
                gerando soluções para seus clientes por meio da captura de
                realidade e da metodologia BIM. A empresa possui como pilares
                fundamentais a melhoria contínua e a satisfação dos clientes e
                vem crescendo exponencialmente desde sua fundação, atuando em
                diversos projetos nos setores de Construção Civil,
                Infraestrutura, Mineração, Energia, Saneamento e Indústria.
            </p>

            <br />
            <br />

            <p>
                Desde seu início, a BIM START identificou a Leica Geosystems
                como grande aliada em função de sua qualidade superior no
                desenvolvimento de hardware e software voltados para a captura
                de realidade.
            </p>

            <p>
                Após algumas conversas entre a BIM START e o Grupo Kallas,
                empresa com 38 anos de atuação no setor imobiliário e mais de 10
                milhões de metros quadrados construídos, as empresas perceberam
                uma grande sinergia na busca pelas soluções mais tecnológicas e
                avançadas do mercado. E foi em uma dessas conversas que a Kallas
                apresentou para a BIMSTART as dificuldades existentes em relação
                à perfeita execução dos subsolos e garagens, principalmente no
                que concerne ao controle de suas qualidades dimensionais,
                visando não apenas garantir a máxima qualidade nas entregas dos
                imóveis adquiridos por seus clientes, mas também se resguardar
                em relação à riscos financeiros. Com base nisso, a BIM START,
                dispondo das ferramentas Leica e do apoio da Kallas, iniciou o
                desenvolvimento de um novo tipo de serviço para a construção
                civil, que assegura a qualidade dos empreendimentos da empresa,
                além de muitas outras que vem começando a adotar o mesmo
                processo.
            </p>

            <p>
                De acordo com Eduardo Pasini Corrêa de Oliveira, Diretor
                Comercial da BIM START: “O uso de tecnologias como o Laser
                Scanner permite que o campo seja transportado diretamente para o
                ambiente de tomada de decisão, trazendo segurança para
                incorporadoras que se preocupam com a qualidade de seus
                empreendimentos e com a perpetuidade de seus negócios.”
            </p>

            <h3>A SOLUÇÃO</h3>

            <p>
                Todo o processo se baseia na proposta de agregar inteligência ao
                uso de nuvens de pontos e escaneamento a laser, trazendo suas
                informações de maneira simples e acessível não apenas para o
                time de engenharia, mas também para o canteiro de obras e para a
                alta diretoria da empresa, de modo a facilitar a tomada de
                decisão.
            </p>

            <p>
                O processo se inicia com base no escaneamento, por meio do uso
                do Laser Scanner Leica RTC360, de pontos de controle
                materializados no canteiro, utilizados para locar os elementos
                estruturais da obra, bem como seus eixos de referência. Após
                digitalizados esses pontos, todas as áreas de subsolo, térreo e
                algumas vezes também pavimentos sobre o solo também são
                percorridas com o laser scanner.
            </p>

            <Image
                src="/images/blog/post1/banner.webp"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />

            <div className="image-description">
                <span>
                    Figura 1 - Nuvem de pontos capturada pela BIM START em
                    subsolo de empreendimento Kallas.
                </span>
                <span>Fonte: Acervo BIM START.</span>
            </div>

            <p>
                Concluso isso, os arquivos são encaminhados para o escritório,
                onde é realizado o processo de registro das cenas da nuvem de
                pontos, por meio do software Leica Cyclone Register 360, que
                dispõe de diversas ferramentas voltadas a garantir o perfeito
                alinhamento entre cenas capturadas, bem como assegurar a
                qualidade do produto final.
            </p>

            <p>
                Uma vez concluída a nuvem de pontos, é iniciado o processo de
                modelagem BIM “as-built” para que a construtora possa seguir com
                o projeto tendo em vista a situação real encontrada “in loco”, a
                qual, através da elaboração do relatório de desvios, é comparada
                com os projetos originais.
            </p>

            <Image
                src="/images/blog/post1/image1.png"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />

            <Image
                src="/images/blog/post1/image2.png"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />

            <div className="image-description">
                <span>
                    Figura 2 - Modelos 3D com identificação de interferências em
                    vagas de garagem em empreendimentos Kallas Arkhes.
                </span>
                <span>Fonte: Acervo BIM START.</span>
            </div>

            <p>
                O relatório apresenta diversos tipos de análises, que vão desde
                recalques em contenções, falhas de concretagem, verificações de
                verticalidade e de planicidade de elementos estruturais,
                interferências nas dimensões laterais das vagas, bem como nas
                alturas úteis.
            </p>

            <Image
                src="/images/blog/post1/image3.png"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />

            <div className="image-description">
                <span>
                    Figura 2 - Modelos 3D com identificação de interferências em
                    vagas de garagem em empreendimentos Kallas Arkhes.
                </span>
                <span>Fonte: Acervo BIM START.</span>
            </div>

            <Image
                src="/images/blog/post1/image4.png"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />
            <div className="image-description">
                <span>
                    Figura 2 - Modelos 3D com identificação de interferências em
                    vagas de garagem em empreendimentos Kallas Arkhes.
                </span>

                <span>Fonte: Acervo BIM START.</span>
            </div>

            <h3>RESULTADOS</h3>

            <p>
                Desde a concepção inicial da ideia, a BIM START e o Grupo Kallas
                já vem realizando tais projetos em dezenas de empreendimentos,
                auxiliando assim, na detecção e prevenção das mais variadas
                situações em obra.
            </p>

            <p>
                De acordo com Renan Galvão Silva, coordenador de inovação do
                Grupo Kallas: “A implantação de escaneamento a laser aqui para o
                Grupo Kallas sempre foi alinhada com os usos e valores que a
                tecnologia traria para a empresa. Desde o início da área de
                inovação, seus usos apresentaram um retorno sobre investimento
                muito rápido que nos fez consolidar nossa parceria com a BIM
                START para todas as nossas obras.”
            </p>

            <p>
                O coordenador ainda complementa: “Começamos a usar em nossos
                terrenos para conferir as demolições e limites, mas o fato do
                produto ser entregue em diversos formatos, como *.rcp e *.rvt,
                sempre nos deu a liberdade de conseguir aproveitar esses
                arquivos para realizar diversos estudos internos, trazendo
                agilidade na tomada de decisões e confiança nos dados que eram
                levantados. Além dos usos já esperados, nós conseguimos
                implantar estudos de altura de fiação de poste para entrada de
                equipamentos, tamanho de copa de árvores que interferia com a
                edificação futura, estudos mais precisos de volumes de corte e
                aterro e até mesmo estudos de plano de ataque de obra.”
            </p>

            <Image
                src="/images/blog/post1/image5.png"
                alt="image"
                width={510}
                height={383}
                style={{
                    width: '100%'
                }}
            />

            <div className="image-description">
                <span>
                    Figura 5 - Plano de ataque de escavação e fundação gerado a
                    partir dos modelos gerados pela BIM START.
                </span>
                <span>Fonte: Acervo Grupo Kallas.</span>
            </div>

            <p>
                Essa parceria de sucesso entre as empresas vem revolucionando o
                controle de qualidade dentro do mundo da construção civil, e
                encontrou nos produtos Leica, a tecnologia e a qualidade
                necessária para alcançar seus objetivos. Eduardo Pasini Corrêa
                de Oliveira complementa: “Foi nos equipamentos e softwares da
                Leica Geosystems que encontramos o alicerce que precisávamos
                para sustentar as soluções tecnológicas que sempre quisemos
                desenvolver”.
            </p>

            {/* Category */}
            <ul className="category">
                <li>
                    <span>Tags:</span>
                </li>
                <li>
                    <p>Tecnologia</p>
                </li>
                <li>
                    <p>IT</p>
                </li>
                <li>
                    <p>Inovação</p>
                </li>
                <li>
                    <p>Negócios</p>
                </li>
            </ul>
        </div>
    )
};
