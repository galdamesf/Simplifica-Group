import {
  conditions,
  contactInformation,
  medias,
  pages,
} from "../../common/constants";
import { ContactItem } from "./contact-item";
import { FooterListItem } from "./footer-list-item";

export const Footer = () => {
  return (
    /* 1. Cambiamos 'py-8' por 'pt-4 pb-20'. 
       Reducir el padding superior (pt) sube visualmente el logo y el texto.
       Aumentar el padding inferior (pb) crea una zona de seguridad para que el 
       botón de WhatsApp no tape el texto.
    */
    <footer className="pt-4 pb-20 px-8">
      <img className="w-[280px] mb-4" src="/images/Logo.png" alt="Logo" />

      {/* 2. Eliminamos 'mt-[-30px]' si estaba causando solapamientos raros.
          Usamos 'items-start' para que todo se alinee hacia arriba.
      */}
      <div className="xl:flex xl:gap-24 items-start">
        <div className="flex flex-col gap-4 md:flex-row xl:gap-24">
          <ContactItem styles="flex-1" {...contactInformation[0]} />

          <div className="flex flex-col gap-4 flex-1 xl:flex-none">
            {contactInformation.slice(1, 4).map((contact) => (
              <ContactItem key={contact.alt} {...contact} />
            ))}
          </div>
        </div>

        {/* 3. Ajustamos el margen superior en móvil (mt-10) y 
               mantenemos la alineación superior en escritorio.
        */}
        <div className="flex flex-col gap-8 mt-10 md:flex-row md:gap-20 xl:mt-0 items-start">
          <ul className="space-y-1">
            {pages.map((page) => (
              <FooterListItem key={page} text={page} />
            ))}
          </ul>

          <ul className="space-y-1">
            {conditions.map((condition) => (
              <FooterListItem key={condition} text={condition} />
            ))}
          </ul>

          <div className="flex justify-center gap-4">
            {medias.map((media) => (
              <div
                key={media.text}
                className="hover:text-Gray-600 transition-colors cursor-pointer border rounded-full size-[32px] flex items-center justify-center"
              >
                {media.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
