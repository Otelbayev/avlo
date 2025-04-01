import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import icon from "../../public/icon.jpg";
const { Header, Content, Sider } = Layout;
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className="h-screen">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="!absolute !top-0 !left-0 !h-screen lg:!static !z-11"
        collapsible
        collapsed={collapsed}
      >
        <img src={icon} alt="logo" className="w-full" />
        <Menu items={[]} />
      </Sider>

      <Layout className="">
        <Header className="!shadow-md !p-0 !bg-white !z-10">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <div className="overflow-x-auto">
          <Content className="m-2">
            <div className="bg-white rounded-sm p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              excepturi quam non hic cumque laudantium rem ab obcaecati odit
              facilis consectetur, impedit nemo quia consequatur perferendis
              tenetur nisi debitis minus ipsa et similique! Tenetur dolore sunt
              libero vero similique officia dolor eum, iste eaque saepe minus
              sed perspiciatis nobis aspernatur tempore soluta consequatur
              aliquam omnis numquam quas nisi voluptate incidunt impedit.
              Aliquam beatae suscipit recusandae accusantium inventore dolorum
              voluptate, officiis neque voluptas eveniet, libero, quae odit
              debitis! Reiciendis, quisquam! Assumenda corporis voluptatem odit
              facilis, quae dolores soluta ipsam ullam sapiente deserunt?
              Laudantium, dolores? Quis obcaecati facilis, facere nobis deserunt
              inventore! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Magni, amet quasi? Earum quisquam hic sunt, magni, modi
              quasi nam libero voluptatibus optio, quos repudiandae saepe? Nam,
              ullam vitae. Reprehenderit soluta explicabo voluptatem ratione
              corporis, quia perspiciatis esse sit adipisci! Debitis libero eos
              repudiandae commodi nulla nobis inventore incidunt aliquam
              quisquam dolor ipsa voluptate suscipit reprehenderit fugit quam
              modi optio blanditiis quod, aut assumenda reiciendis minus placeat
              cumque? Placeat rerum necessitatibus deserunt officia corporis
              quasi consequatur magnam consectetur beatae eaque mollitia
              laudantium sit soluta harum, voluptas nostrum fuga ut veniam error
              porro? Eius ad iste velit, sint minus minima quasi blanditiis
              eligendi aliquid nulla officia atque quidem libero dicta rerum qui
              neque magnam vitae provident quam pariatur commodi! Nesciunt,
              officia. Voluptatibus excepturi sequi dolorem officia nesciunt
              repellat fugiat officiis architecto, quod optio unde id
              accusantium non velit corporis vel reprehenderit. Culpa sed velit
              ratione, ut possimus incidunt minima molestias et a eligendi nam
              natus omnis iste iure odio perferendis doloremque commodi
              consectetur laudantium praesentium fuga repellendus reiciendis
              excepturi voluptatem? Aliquam accusantium officiis quae eaque
              adipisci quasi labore consequuntur ullam quia ex eveniet mollitia,
              asperiores repellendus vitae dolorem nostrum maxime obcaecati
              suscipit voluptates quo ab atque laborum. Doloremque nemo
              recusandae quasi cumque vitae a quod ea veritatis ad dignissimos,
              quae rem dolorem reiciendis quos autem voluptatum rerum dolorum
              quibusdam. Aut veniam soluta voluptate itaque illo sapiente
              accusantium laudantium suscipit odio aliquam vero, culpa cum
              ducimus dolor maxime vitae. Expedita, nesciunt. Unde quidem
              facilis libero, molestias dolorum nisi rerum nesciunt nostrum
              laboriosam consequuntur. Quae labore, vel quibusdam iste odit
              nulla esse aut impedit nam, modi dicta consequatur nemo dolores
              earum itaque deleniti vero? Quasi quam exercitationem, animi
              aliquam provident molestiae sint optio libero? Reprehenderit
              maxime consequuntur dicta necessitatibus amet eius voluptatum
              quibusdam. Neque ipsam ad beatae pariatur eum, delectus atque
              laboriosam odit ex dolor provident impedit voluptatum
              reprehenderit suscipit similique dolorum officiis distinctio quis
              illum quod quos natus at assumenda? Laborum rerum obcaecati beatae
              modi tempore aut sunt unde facere quos cum, aspernatur commodi!
              Harum, vel nobis? Voluptatum ea, eaque magni expedita corrupti
              eius numquam consequuntur recusandae earum omnis debitis quasi
              explicabo repudiandae dignissimos ab maiores quaerat temporibus
              dicta? Facilis ab in saepe officiis, at molestiae itaque nam
              voluptates voluptas. Aliquam, omnis ab voluptas sequi placeat eum
              nulla eius tempore doloribus. Nulla dolore quia minus ea excepturi
              quo, quasi illo sequi laudantium debitis magnam? Ab reprehenderit,
              dolore veniam nihil rem iste. Quasi, rerum! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Totam, nam? Explicabo, alias,
              perferendis aspernatur perspiciatis vel repudiandae ad quasi
              molestiae reiciendis fugit, molestias nulla adipisci ullam quas
              iste in. Voluptas dolorem, ex nam unde incidunt voluptatum culpa.
              Eveniet quo voluptate, aperiam sunt similique placeat deserunt
              amet ipsum enim? Totam harum optio vitae consequuntur! Nostrum
              deleniti modi minus nam dolor, doloremque pariatur fugiat maiores
              laboriosam ratione molestias id sequi consequuntur! Totam numquam
              vitae at quisquam quibusdam reiciendis quo, optio dolore similique
              tenetur fugiat ratione tempora odit aut ex ut consectetur quidem
              commodi deserunt ea. Similique vero nam illum ipsam ratione
              quisquam quibusdam, magnam ea animi dolor, quis ab sapiente quidem
              corrupti ipsum maiores reiciendis consequatur, ad voluptate nemo
              autem culpa quasi. Veritatis eligendi perspiciatis, cumque
              doloremque deserunt harum nulla! Laborum quidem consequatur
              commodi voluptates odit magni hic illum repellendus placeat modi
              natus voluptas architecto ab, maiores aspernatur rerum velit neque
              non quisquam ea quo itaque rem. Facere fuga sint illum architecto
              dolores iusto consequatur quam ipsum sapiente tenetur suscipit
              perspiciatis quia maiores dolorum, fugit blanditiis adipisci
              magni, veritatis voluptatem placeat deserunt quod praesentium
              excepturi! Iste rerum necessitatibus possimus consequatur dolorem
              fugiat quia quaerat ipsa similique. Unde voluptatum eveniet
              accusantium sapiente labore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Excepturi fugiat aliquam, optio
              reiciendis nulla sunt quae necessitatibus eaque exercitationem
              harum, dolorem itaque nobis? Optio tenetur laborum nesciunt soluta
              laboriosam blanditiis maxime doloribus quod adipisci, placeat,
              totam debitis sed nostrum error praesentium ad odit, id ipsum?
              Nihil dolore voluptatum magnam, eos numquam dolorem odio,
              similique odit, minus repellat quod! Quae fugit, architecto
              aperiam laboriosam deserunt dicta magni, quaerat ducimus
              voluptate, tempore alias consequatur? Sint soluta deserunt,
              molestias animi vitae quidem at quam exercitationem ipsa id
              necessitatibus mollitia sit illum dicta velit, quod fugit autem
              et. Et debitis earum quaerat molestiae reiciendis ut minima
              provident dignissimos quia suscipit praesentium, eligendi dicta
              corporis unde animi nesciunt consequuntur fugit aut magni quod
              recusandae ipsa architecto! Voluptatem temporibus eius dolore
              molestias tenetur asperiores doloribus omnis accusantium quis
              tempora quae, veniam odio, fuga commodi inventore expedita
              molestiae! Dolorum quas itaque exercitationem ducimus est
              voluptatem magni non quam suscipit dolor a culpa, fugit delectus
              illo cumque sapiente doloribus accusamus! Doloremque dignissimos
              voluptate similique? Soluta tenetur a quas ratione maiores alias
              provident numquam ipsum, molestiae obcaecati modi officiis
              corrupti id reiciendis recusandae doloribus odit eius expedita
              sint saepe error. Assumenda blanditiis ullam laboriosam! Quis
              nesciunt eaque ducimus aperiam. Ex, ab. Consequatur labore
              pariatur, suscipit dicta iste dolor quis? Blanditiis autem
              quisquam ex quae tempora minima consequuntur officia facere
              necessitatibus! Harum optio aliquam culpa perferendis autem,
              commodi esse iure nam deserunt! Ipsum, tempore suscipit? Quia
              cupiditate sint corrupti! Rem velit est nostrum illo voluptatum
              aperiam ipsum tenetur odio vero quam maiores deleniti minima totam
              officiis, assumenda saepe, commodi unde, adipisci sed nobis! Ut
              voluptatibus nostrum libero, ipsam porro, vero repellat veritatis
              deleniti nesciunt corporis fugiat impedit iusto corrupti debitis
              ducimus illum. Quos laudantium, eum fuga maiores dolores non
              eaque, molestias quaerat sapiente recusandae aut id sint
              reprehenderit mollitia fugit, deleniti sit quibusdam nihil aperiam
              voluptatibus omnis corporis et? Mollitia adipisci corporis
              provident, asperiores reprehenderit dolore nam quos placeat sunt
              officia blanditiis ad, at officiis modi, dolores autem tenetur
              iusto? Ratione placeat perspiciatis qui nostrum culpa earum sequi,
              asperiores veritatis quaerat veniam itaque minus, dolorem
              molestiae suscipit error exercitationem, debitis assumenda tempora
              harum deserunt labore? Optio velit facere, fugiat totam suscipit
              iure blanditiis quis ratione dicta eos aspernatur quibusdam,
              asperiores tempora, harum rem accusantium. Consequatur repellat
              vel sit maxime, placeat dolor perferendis iure modi earum expedita
              non consectetur dignissimos saepe veritatis? Quos ab blanditiis
              optio corrupti odio qui cumque saepe facilis? Dolores doloremque
              assumenda atque quibusdam vel, minus, adipisci omnis aliquid
              corrupti aspernatur sapiente, quae voluptates doloribus harum aut
              itaque pariatur vitae. Maxime magni sint molestias, possimus
              temporibus dignissimos ex molestiae esse ipsum nisi? Enim aliquam
              sint ipsa voluptate! Beatae, ipsa! Praesentium perspiciatis id
              pariatur distinctio, vitae eos perferendis? Fugiat dignissimos
              quis totam, molestiae magnam explicabo sint distinctio tenetur
              quasi, blanditiis libero ullam ratione corrupti accusantium?
              Blanditiis deleniti cupiditate culpa nisi laudantium nihil
              temporibus illum repellat nemo, voluptas consectetur eos voluptate
              rerum totam placeat eum a architecto ea dolorum modi magni
              accusamus, nostrum iste? Explicabo autem quidem qui, ipsum omnis
              quod error cumque deleniti reiciendis commodi similique laborum
              perferendis! Facilis exercitationem iusto id quaerat facere
              deserunt tempora sunt pariatur odio, esse fuga optio autem sed
              maiores, ullam, inventore non minus explicabo commodi corrupti
              alias recusandae error? Mollitia neque sapiente nesciunt
              architecto dolores voluptatibus libero ullam amet. Et quod optio
              nihil labore, expedita maxime animi debitis modi perspiciatis unde
              harum quis ut ipsam velit nesciunt soluta repellendus minima,
              vitae quam cupiditate culpa minus similique hic! Sint, libero
              magni placeat facilis blanditiis natus ea inventore eius
              reprehenderit sequi ipsam laborum, deleniti nobis hic. At esse
              vero quidem eos quibusdam quis, quam, doloremque dicta impedit
              repellat amet rem saepe deserunt. Sapiente quidem cumque culpa,
              porro fuga voluptas ex officiis. Id accusantium ad officia
              sapiente expedita. Dicta architecto assumenda voluptate pariatur
              modi libero veritatis delectus omnis, sit aspernatur laborum,
              illum expedita officiis exercitationem blanditiis non accusamus
              molestias, iste ea. Rem quo dolorem natus exercitationem,
              consequuntur repudiandae blanditiis iste a odio obcaecati aliquid
              explicabo veniam numquam at nostrum! Aperiam perferendis alias
              distinctio rem ratione inventore voluptatem numquam nostrum
              impedit nemo quaerat perspiciatis vitae at odio, sit non minima id
              provident quidem rerum modi, officiis possimus ut atque! Obcaecati
              rerum exercitationem, necessitatibus fugit odio eaque iste!
              Explicabo eligendi expedita voluptatibus velit blanditiis possimus
              ea molestias. Praesentium cum perspiciatis dignissimos distinctio
              ut, qui perferendis sequi eveniet a, aliquid, officia excepturi
              soluta dicta non possimus vitae maiores impedit velit aperiam
              nihil voluptate! Est maxime illum quibusdam consequuntur
              consequatur ab vero aliquid nihil vel quidem. Nam nulla eligendi
              ad eius ducimus repellat reprehenderit quisquam perferendis
              suscipit. Reiciendis, doloribus? Eligendi adipisci ea molestias
              nesciunt omnis corrupti quae, vel quidem eveniet iste autem amet
              laudantium ab nihil commodi, aliquam voluptatum! Debitis
              doloremque, nemo quibusdam dolor voluptatum eos. Ipsam, autem
              sapiente! Voluptatibus atque, a magni quas laudantium officiis
              deleniti perferendis ut porro eveniet dolor at, molestiae
              voluptate mollitia possimus doloribus ea aperiam tempore accusamus
              sapiente corrupti! Fugiat laudantium commodi, nisi animi quos
              aliquam error qui neque nostrum porro obcaecati, enim eius odit
              tenetur et possimus repudiandae nihil adipisci delectus, corporis
              cumque autem? Asperiores nulla tempora, odio voluptatem temporibus
              ipsa deleniti quod nobis officia sed debitis sequi explicabo
              repellat accusamus ad. Asperiores quisquam placeat quas commodi
              nobis quaerat et, labore obcaecati voluptate repellat mollitia
              dolorum repellendus qui saepe facilis, nemo assumenda!
              Exercitationem, autem dignissimos velit neque, in reiciendis iusto
              sint tempora ipsum maxime obcaecati ut sunt, quas corporis!
              Veritatis odit esse ut delectus, dolore voluptatibus reiciendis
              voluptatem, doloribus fugiat quos facilis neque voluptas dicta
              repellat. Illum facilis commodi quaerat, temporibus cumque minus
              totam suscipit qui, voluptatum doloremque optio repellat harum
              deserunt earum doloribus perferendis ab, veritatis vero quas
              labore eum magni. Exercitationem incidunt ex voluptas, odit quidem
              suscipit at in? Quos assumenda officiis deleniti earum? Debitis
              quia quis neque voluptatibus praesentium accusantium, hic possimus
              eos aspernatur adipisci odio id reprehenderit! Animi illo dolorum
              earum explicabo beatae ipsam, ipsum pariatur dolor fugit
              voluptatem consequuntur dolorem aliquam quaerat aut, quisquam
              sequi odit, repellat doloremque odio modi magnam laboriosam.
              Provident fugit inventore debitis repellat distinctio ipsa amet,
              excepturi eveniet corporis quo incidunt voluptatum, nihil et illum
              velit harum temporibus? Quam, assumenda itaque? Sint aperiam
              eveniet deserunt officia eius esse hic fugit maiores blanditiis
              nesciunt nam, fuga ipsam ab maxime est eaque enim beatae inventore
              in earum nostrum distinctio, quia iusto? Harum beatae dignissimos
              dolorum minus modi quos placeat iusto aliquid eligendi enim esse
              labore, eaque, mollitia aperiam ratione porro corporis provident
              commodi, exercitationem eveniet vero! Ipsa error cum esse et
              voluptatibus voluptate. Perspiciatis eveniet nemo unde nam
              accusamus incidunt maxime cumque dolorum omnis ut quo tenetur
              neque, vitae voluptatibus dolore possimus maiores officia?
              Expedita, voluptate inventore? Labore, autem! Nesciunt rerum
              tempora temporibus quas adipisci, sed quasi! Dolore, ea fugiat
              vitae adipisci consectetur recusandae. Molestias minima, omnis in
              facilis vitae facere alias inventore laborum. Laudantium, odio
              facere? Delectus quae laboriosam ad nisi doloremque facilis totam
              iusto reiciendis sapiente a? Veritatis aliquam voluptatibus,
              itaque, illum repellendus sed, beatae at deserunt facilis ea vitae
              rem. Tenetur totam voluptatem quisquam sed? Aliquam assumenda
              commodi ipsum fugiat. Expedita eveniet ducimus earum aspernatur
              maxime rem nam perferendis. Iure doloremque sit eveniet illum,
              assumenda commodi nisi explicabo dolorem at molestias! Laboriosam
              repudiandae impedit labore, ea omnis possimus magni harum
              reiciendis quas mollitia? Atque commodi non culpa mollitia
              consectetur soluta aperiam rem sint tempora veritatis.
              Accusantium, consectetur itaque. Hic aspernatur obcaecati
              consequuntur quidem nesciunt! Iure nesciunt ullam odit sit eos
              corrupti, nobis dolorem voluptate expedita voluptates mollitia vel
              debitis. Dolor quia impedit velit quis molestiae fuga amet qui aut
              totam, numquam magnam sit quam adipisci soluta dignissimos facere.
              Similique consequatur autem quasi, necessitatibus sapiente vel
              natus animi quo? Assumenda quos, ut provident minima ratione
              ducimus officiis error soluta inventore laudantium possimus odit?
              Obcaecati modi consequuntur, ullam accusantium eum exercitationem
              dolorum. Corporis odit, tempora, fugiat quos repudiandae placeat
              dolore, voluptates cum autem dignissimos enim id asperiores cumque
              temporibus praesentium voluptas error sit eveniet quis ipsam?
              Explicabo exercitationem quae ex corrupti officia. Dolores odio
              mollitia nesciunt nobis qui, voluptatibus harum officia illo rerum
              vero placeat repudiandae recusandae expedita animi odit fugiat
              quam, tempora velit eligendi eaque! Qui, assumenda? Laudantium
              reprehenderit quo sapiente fuga veritatis culpa eum dignissimos
              explicabo mollitia possimus, iste in nesciunt, quasi commodi natus
              maiores assumenda officiis, cupiditate ex minima pariatur
              repudiandae! Vero laborum perferendis corporis repellendus enim
              dicta possimus? Sit quis nesciunt a, voluptate distinctio iure
              voluptatibus praesentium sunt ullam assumenda maiores ipsa enim,
              consequuntur vero. Libero magni, enim quis aspernatur facilis
              magnam veritatis? Autem recusandae soluta sequi earum, aspernatur
              dolor veritatis exercitationem magnam nostrum velit, laudantium
              eaque sed nesciunt laborum! Mollitia, id illum incidunt suscipit
              consequuntur deleniti nemo illo corrupti saepe rem quidem
              dignissimos architecto dicta, neque aut, iure quo possimus natus
              necessitatibus assumenda. Velit quas fuga corrupti consectetur,
              odit commodi numquam delectus asperiores sed nulla labore! Id qui
              dolorum provident similique culpa maiores quam debitis cupiditate
              consequuntur illum? Non sit asperiores quo eligendi corrupti,
              tenetur, commodi amet sequi necessitatibus, quae laudantium. Autem
              unde cupiditate rem suscipit distinctio aperiam repellendus
              voluptatem veritatis quidem doloremque repellat odit assumenda,
              optio iste ex similique recusandae maiores minus libero
              accusantium porro cumque. Tenetur, a eos! Odit magnam blanditiis
              deserunt porro magni facilis voluptatibus, architecto officiis
              tempora officia quaerat tempore velit voluptates odio quia, itaque
              ab aspernatur sint illo corrupti maiores, pariatur mollitia
              ducimus. Odit maxime dolores ullam debitis? Consequuntur doloribus
              voluptatum doloremque, eligendi incidunt sit eaque fugit magni
              quam. Eos incidunt porro est aperiam in magnam blanditiis commodi,
              beatae veritatis, cupiditate sit reprehenderit. Reiciendis aliquid
              facere ea dolore consectetur! Sequi quod dicta iste nulla a soluta
              libero neque fuga ab, esse ducimus quia? Nobis vel ullam
              repellendus at unde necessitatibus perferendis, exercitationem
              inventore perspiciatis autem dignissimos id deserunt ipsam neque
              dolorum velit, vitae quos rerum suscipit officia repudiandae.
              Libero similique, porro nisi, molestiae eligendi amet modi,
              commodi repudiandae consequuntur voluptates quasi suscipit sint
              ea! Error optio repellendus, doloribus rerum autem non
              exercitationem quidem illum voluptates neque temporibus, omnis
              eveniet corporis alias tenetur totam quaerat in vero reiciendis
              at, animi mollitia sint! Amet pariatur odio officia porro debitis
              delectus optio corporis totam, temporibus placeat eligendi
              nesciunt maxime, eaque qui officiis! Pariatur nobis harum odio
              iusto quo quod deserunt inventore eaque ipsum optio. Recusandae
              neque consequuntur sequi similique fuga molestias non unde omnis.
              Doloremque dolorem quae accusamus rem ad recusandae, libero ullam,
              ipsam blanditiis tempore exercitationem quod nulla et mollitia
              distinctio itaque, quas cumque ex voluptatum? Nulla eos sapiente
              neque molestiae quis dolor expedita totam voluptates consectetur
              architecto dolore eaque modi voluptatum sunt, asperiores non
              nobis, unde ipsa hic voluptas obcaecati consequatur!
              Exercitationem atque magnam asperiores vel porro. Cupiditate
              quisquam doloribus accusantium quo a placeat voluptas odit culpa
              numquam debitis, dignissimos harum aut nostrum tempore consequatur
              consequuntur eum natus? Consequatur, neque est velit hic
              distinctio, veritatis qui doloremque ea reprehenderit maiores
              incidunt accusamus. Expedita dolore numquam laborum quas veniam,
              debitis vitae exercitationem recusandae itaque natus eum quos.
              Sapiente voluptas harum totam architecto, repellat corporis
              deleniti, reprehenderit illo aut deserunt enim aliquid incidunt.
              Aliquam enim qui repellat deleniti sint consequuntur explicabo
              commodi nemo expedita est eaque labore magni vitae, dolorem
              consectetur quis nostrum itaque ex? Esse aspernatur quisquam amet
              magnam. Nemo natus autem nulla dolores? At, ullam? Consectetur
              similique, asperiores officia eveniet fuga ipsum? Omnis qui ipsa
              eligendi dolorem numquam officiis recusandae, facilis incidunt a
              laboriosam suscipit autem eius commodi, expedita blanditiis sit
              fugit, quas alias voluptatibus quaerat vitae. Sed veniam, aut fuga
              nulla blanditiis natus, aliquam eum, nemo possimus velit totam
              illo nihil. Quidem officiis pariatur, iste consectetur saepe
              numquam, quis unde dolore quaerat, esse sapiente libero excepturi
              aliquam minima odio? Facilis fugit optio cumque ullam eligendi
              voluptates, dolorum nobis quos quis magni qui doloribus adipisci
              quia odio, architecto quo neque dolorem accusantium nostrum maxime
              beatae reiciendis fuga? Optio, similique, qui possimus modi earum,
              quasi perferendis aspernatur nesciunt perspiciatis tenetur ducimus
              dignissimos corporis numquam vel omnis repellendus doloribus vitae
              quibusdam error beatae. Perspiciatis, sunt repellendus eos culpa
              saepe quae expedita odit delectus, est fugit labore enim sed
              veritatis inventore iure, atque sit quos velit accusantium quia
              hic iusto. Nulla recusandae, possimus doloribus soluta ipsam
              excepturi quasi reprehenderit iure.
            </div>
          </Content>
        </div>
      </Layout>
    </Layout>
  );
};
export default App;
