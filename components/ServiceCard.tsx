import Image from 'next/image'

interface ServiceCardProps {
    children: any;
    title:string
    image: string;
    imageAlt:string
}

export function ServiceCard(props:ServiceCardProps) {

    return (
        <div className="rounded-2xl p-6 shadow-md bg-white mb-16 md:mb-0">
            <div className=" service-card-img">
                <Image src={props.image} alt={props.imageAlt}
                    className="w-full h-auto" width={600} height={525}></Image>
            </div>
            <div className="text-center mt-9">
                <h5 className="font-bold color-primary text-2xl">{props.title}</h5>
            </div>
            <p className=" mt-9">
                Atendimento psicoterápico presencial para crianças e adolescentes, visa a restaurar a saúde mental e promover desenvolvimento saudável.
          </p>
            <div className=" mt-6">
                <p className="inline">
                    Atendimentos em&nbsp;
        </p>
                <p className="inline font-bold color-complementary">
                    Vitória da Conquista - BA.
        </p>
            </div>
        </div>

    );

}