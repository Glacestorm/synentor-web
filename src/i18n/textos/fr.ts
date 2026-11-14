// Textos en francés de Francia. Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts). Traducción de Claude, pendiente de una lectura nativa (diseño §3).
import type { Textos } from './ca';

export const fr: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'Votre entreprise, connectée.',
    descripcion:
      'Conseil en IA et en ventes avec un logiciel propre conçu en Andorre : Synentor Suite ERP-CRM multi-entreprises, MUV et projets d’IA sur mesure.',
  },
  nav: {
    inicio: 'Accueil',
    servicios: 'Services',
    precios: 'Tarifs',
    contacto: 'Contact',
    demo: 'Demandez une démonstration',
    idioma: 'Langue',
    menu: 'Menu',
    saltar: 'Aller au contenu',
  },
  franjaIdioma: {
    idioma: 'français',
    texto: 'Souhaitez-vous voir cette page en {idioma} ?',
    aceptar: 'Oui, changer',
    cerrar: 'Non, merci',
  },
  pie: {
    empresa: 'Entreprise',
    legal: 'Mentions légales',
    avisoLegal: 'Mentions légales',
    privacidad: 'Confidentialité',
    cookies: 'Cookies',
    nrt: 'NRT en cours',
    estadisticas: 'Statistiques de visites sans cookies (Umami).',
  },
  cookiesAviso: {
    titulo: 'Cookies',
    aviso: '{empresas} utilisent des cookies pour {finalidades}. Ils ne sont activés que si vous les acceptez. Vous pouvez les refuser ou les choisir, et changer d’avis à tout moment avec le bouton des cookies. Les données peuvent sortir d’Andorre et de l’Union européenne.',
    y: ' et ',
    politica: 'Politique de cookies',
    aceptar: 'Tout accepter',
    rechazar: 'Tout refuser',
    configurar: 'Personnaliser',
    guardar: 'Enregistrer mon choix',
    siempre: 'Toujours actifs',
    flotante: 'Paramètres des cookies',
    necesarias: { nombre: 'Nécessaires', texto: 'La langue que vous choisissez (cookie « lang », 1 an), votre choix sur les cookies (« synentor_consentimiento », 12 mois) et la vérification anti-robots du formulaire de contact (Cloudflare). Ils ne peuvent pas être désactivés.' },
    estadisticas: { nombre: 'Statistiques', texto: 'Les pages visitées et la navigation, pour améliorer le site. Clarity enregistre la session en masquant ce qui est saisi.', finalidad: 'mesurer les visites' },
    publicidad: { nombre: 'Publicité', texto: 'Pour montrer des annonces de Synentor aux personnes qui ont déjà visité le site et savoir si elles fonctionnent.', finalidad: 'vous montrer des annonces de Synentor sur d’autres sites' },
    herramientas: {
      ga4: 'Google Analytics (Google) : cookies « _ga », jusqu’à 13 mois.',
      clarity: 'Microsoft Clarity (Microsoft) : cookie « _clck », 1 an, et « _clsk », 1 jour.',
      metaPixel: 'Pixel Meta (Meta Platforms) : cookie « _fbp », 90 jours, et ceux de Meta sur son domaine.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn) : cookies de LinkedIn sur son domaine, jusqu’à 1 an.',
    },
  },
  estados: {
    disponible: 'Disponible',
    inminente: 'En développement imminent',
    a_medida: 'Sur mesure',
    inminenteLargo: 'En développement imminent et adaptation sur mesure au client',
  },
  inicio: {
    titulo: 'Synentor · Conseil en IA et en ventes avec un logiciel propre',
    descripcion:
      'ERP-CRM multi-entreprises conçu en Andorre, MUV et conseil en IA et en ventes. Comptabilité, paie, achats, ventes et démarches au même endroit.',
    portada: {
      antetitulo: 'Conseil en IA et en ventes · Logiciel propre conçu en Andorre',
      titulo: 'Votre entreprise, connectée.',
      subtitulo:
        'Comptabilité, paie, achats, ventes et démarches au même endroit. Avec une IA qui prend en charge le travail répétitif et un conseil qui vous accompagne.',
      botonDemo: 'Demandez une démonstration',
      botonPrecio: 'Calculez votre prix',
      nota: 'À partir de {base} par mois · {usuarios} utilisateurs inclus · hors taxes',
      animacion: { pausa: 'Mettre l’animation en pause', reanuda: 'Reprendre l’animation' },
      nodos: { compras: 'Achats', ventas: 'Ventes et CRM', rrhh: 'RH', contabilidad: 'Comptabilité', bancos: 'Banques', muv: 'MUV' },
    },
    problema: {
      titulo: 'Trop de logiciels. Trop de feuilles de calcul. Trop de travail répété.',
      puntos: [
        'Des factures que quelqu’un doit saisir une à une.',
        'Une paie et une CASS qui dépendent d’une seule personne.',
        'Des banques qui ne concordent qu’en fin de mois.',
        'Des lois qui changent au BOPA sans que vous le sachiez.',
      ],
      cierre: 'Synentor réunit tout au même endroit et fait à votre place le travail qui se répète.',
    },
    pilares: {
      titulo: 'Trois façons de faire grandir votre entreprise',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'La gestion complète de l’entreprise, conçue pour l’Andorre : comptabilité selon le plan andorran, trésorerie, achats, ventes et CRM, ressources humaines, fiscalité et juridique.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'Le cerveau opérationnel de l’entreprise : cartes de connaissances, tâches avec responsables, échéances et dépendances, et une IA privée qui fonctionne dans vos bureaux.',
      },
      consultoria: {
        titulo: 'Conseil en IA et en ventes',
        texto: 'Diagnostic, formation, assistants et automatisations. Et des projets d’IA sur mesure, selon votre budget.',
      },
      mas: 'Découvrir',
    },
    rrhh: {
      antetitulo: 'Ressources humaines',
      titulo: 'Les ressources humaines de l’Andorre, pour de vrai.',
      texto:
        'Dossier du salarié, contrats, affiliation à la CASS, paie et IRPF andorran, congés, horaires, pointage avec portail du salarié et soldes de tout compte. Le tout relié à la comptabilité.',
      puntos: [
        'Les documents des personnes sont lus par une IA qui fonctionne dans vos locaux.',
        'Lecture des pièces d’identité pour remplir le dossier en quelques secondes.',
        'Chaque modification est enregistrée.',
      ],
      espana:
        'En Espagne : paie et lecture des conventions collectives du registre officiel (REGCON et BOE), en développement imminent et adaptation sur mesure au client.',
      dato:
        'Dans l’atelier où il est né, dès le deuxième mois, près de 8 personnes sur 10 ayant travaillé le mois entier pointaient déjà depuis le portail du salarié.',
      cifra: {
        etiqueta: 'pointaient depuis le portail du salarié',
        texto: '{fichan} des {total} personnes ayant travaillé le mois entier ({mes}), dans l’atelier où est né Synentor.',
        fuente: 'Donnée mesurée : comptage dans la base du programme, sans données personnelles.',
      },
    },
    multiempresa: {
      antetitulo: 'Multi-entreprises',
      titulo: 'Beaucoup d’entreprises. Une seule installation.',
      texto:
        'Chaque entreprise est isolée des autres, avec ses utilisateurs et ses droits. Idéal pour les groupes et les cabinets : vous changez d’entreprise en un instant.',
      puntos: ['Vous payez par entreprise, pas par personne.', '{usuarios} utilisateurs inclus.', 'Entreprise supplémentaire : {empresaAdicional} par mois.'],
    },
    ia: {
      antetitulo: 'IA privée',
      titulo: 'Votre IA, chez vous.',
      texto:
        'Les factures des fournisseurs et les documents des personnes sont lus par une IA qui fonctionne sur un équipement de votre entreprise. Ces documents ne partent pas dans le cloud.',
    },
    compras: {
      titulo: 'Les factures se lisent toutes seules.',
      texto:
        'Envoyez-les par e-mail ou déposez-les dans un dossier : Synentor les lit, crée le fournisseur si nécessaire et prépare le brouillon, qu’il ne vous reste plus qu’à vérifier.',
      pasos: ['Facture par e-mail', 'L’IA la lit', 'Brouillon à vérifier', 'Comptabilisée'],
    },
    bancos: {
      titulo: 'Toutes les banques, rapprochées.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV ou Excel : Synentor lit le relevé et vous propose le rapprochement.',
      pasos: ['Relevé bancaire', 'Mouvements lus', 'Rapprochement proposé', 'Vous le confirmez'],
    },
    juridico: {
      titulo: 'La loi andorrane, sous surveillance.',
      texto:
        'Veille du BOPA, démarches officielles avec leurs délais, registre des actes de société et prévention du blanchiment pour les assujettis.',
    },
    historia: {
      antetitulo: 'Comment tout a commencé',
      titulo: 'Né au cœur d’une entreprise réelle.',
      texto:
        'Synentor n’est pas une maquette : il est né en gérant chaque jour une entreprise andorrane, un atelier avec des boutiques. Chaque écran a été conçu pour résoudre un vrai problème.',
    },
    precio: {
      titulo: 'Un prix clair, sans surprise.',
      texto: 'Choisissez les modules dont vous avez besoin et voyez le total à l’instant. Ceux qui vont ensemble s’ajoutent automatiquement.',
      boton: 'Calculez votre prix',
    },
    final: {
      titulo: 'Parlons de votre entreprise.',
      texto: 'Nous vous présentons Synentor avec des cas proches du vôtre et nous vous disons, sans engagement, par où nous commencerions.',
      boton: 'Demandez une démonstration',
    },
  },
  contacto: {
    titulo: 'Contact · Synentor',
    descripcion: 'Écrivez-nous et nous vous répondons sous un jour ouvré.',
    encabezado: 'Parlons-nous.',
    entrada: 'Dites-nous ce dont vous avez besoin. Nous vous répondons sous un jour ouvré, du lundi au vendredi de 9 h 00 à 18 h 00 (heure d’Andorre).',
    datos: 'Coordonnées',
    correo: 'E-mail',
    telefono: 'Téléphone',
    direccion: 'Adresse',
    horario: 'Horaires',
    horarioTexto: 'Du lundi au vendredi, de 9 h 00 à 18 h 00 (heure d’Andorre)',
    despues: {
      titulo: 'Et ensuite',
      pasos: [
        'Nous recevons votre message sur l’adresse e-mail de l’entreprise.',
        'Nous vous répondons sous un jour ouvré.',
        'Si vous le souhaitez, nous vous préparons une proposition écrite.',
      ],
    },
    formulario: {
      titulo: 'Envoyez-nous un message',
      nombre: 'Nom',
      correo: 'Adresse e-mail',
      empresa: 'Entreprise',
      telefono: 'Téléphone',
      asunto: 'Objet',
      asuntos: {
        informacion: 'Informations générales',
        demostracion: 'Demander une démonstration',
        pedido: 'Demande de commande',
        centralita: 'Standard téléphonique avec IA pour cabinets médicaux',
        precios: 'Tarifs et devis',
        consultoria: 'Conseil en IA et en ventes',
        muv: 'MUV',
        web: 'Création de sites web',
        otro: 'Autre',
      },
      mensaje: 'Message',
      consentimiento: 'J’ai lu la {politica} et j’accepte que ces données soient utilisées pour me répondre.',
      politica: 'politique de confidentialité',
      obligatorio: 'obligatoire',
      enviar: 'Envoyer le message',
      enviando: 'Envoi en cours…',
      contador: '{n} sur {max}',
      ok: 'Envoyé. Nous vous répondrons sous un jour ouvré.',
      errores: {
        datos: 'Vérifiez les champs signalés : une information manque ou n’est pas valide.',
        robot: 'Nous n’avons pas pu vérifier que vous n’êtes pas un robot. Veuillez réessayer.',
        envio: 'L’envoi n’a pas pu être effectué pour le moment.',
        red: 'Pas de connexion.',
      },
      alternativa: 'Écrivez-nous directement à {correo}.',
      sinJs: 'Si le formulaire ne fonctionne pas, écrivez-nous à {correo}.',
    },
  },
  servicios: {
    titulo: 'Services · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM module par module, MUV, conseil en IA et en ventes, énergie, migrations, portail du salarié et sites web.',
    encabezado: 'Tout ce que nous faisons, sans lignes en petits caractères.',
    entrada:
      'Logiciel propre et conseil. Pour chaque module, nous vous disons s’il fonctionne aujourd’hui dans votre pays, s’il est en développement imminent ou s’il s’adapte sur mesure.',
    columnas: { andorra: 'Andorre', espana: 'Espagne', otros: 'Portugal, France, Italie et Allemagne' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'La gestion de l’entreprise au même endroit. Vous payez par entreprise et pour les modules que vous utilisez.',
      requiere: 'Nécessite {modulo}',
      idiomaPrograma:
        'Les écrans du programme sont en castillan et en catalan. Les autres langues sont en développement imminent et adaptation sur mesure au client.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'Le moteur multi-entreprises : utilisateurs et droits, sauvegardes, IA locale, point d’entrée unique des documents, données de référence, fiche d’entreprise et registre des actes, comptabilité selon le plan andorran, trésorerie et rapprochement bancaire, tableau de bord et rapports.',
      },
      compras: {
        nombre: 'Achats intelligents',
        texto:
          'Les factures des fournisseurs arrivent par e-mail ou dans un dossier et se lisent toutes seules : création du fournisseur si nécessaire et brouillon à vérifier.',
      },
      ventas_crm: {
        nombre: 'Ventes et CRM',
        texto: 'Clients, projets, contacts, carte commerciale et registre des factures émises avec l’IGI.',
      },
      rrhh: {
        nombre: 'Ressources humaines et paie',
        texto:
          'Dossier du salarié, contrats, affiliation à la CASS, paie et IRPF andorran, congés, horaires, pointage, portail du salarié et soldes de tout compte.',
      },
      fiscal: { nombre: 'Fiscalité', texto: 'IGI, impôt sur les sociétés, déclarations et formulaires de la DTF.' },
      juridico: {
        nombre: 'Juridique et démarches',
        texto: 'Veille du BOPA, démarches officielles avec leurs délais, dossiers et registre des actes de société.',
      },
      pbc: {
        nombre: 'Prévention du blanchiment',
        texto: 'Le dossier de chaque client pour les assujettis : questionnaires, modèle de risque, décisions et communications à la UIFAND.',
      },
      productos: { nombre: 'Produits, fiches de coût et stock', texto: 'Produits, recettes avec leur coût et stock.' },
      tpv: {
        nombre: 'Caisse et TPV',
        texto: 'Les ventes du TPV HIOPOS et la caisse CashDro, chaque jour dans la comptabilité. CashDro, dans une seule entreprise par installation.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'Pour les conseillers en énergie : dossiers, clients, points de fourniture et CUPS, factures avec leur PDF, contrats et échéances, comparaison avec votre catalogue de tarifs, rapport et proposition en PDF, suivi des économies et portail client. Marché espagnol de l’électricité, tarifs jusqu’à 3 périodes.',
      },
    },
    muv: {
      titulo: 'MUV',
      texto:
        'Le cerveau opérationnel de l’entreprise : cartes de connaissances, tâches avec responsables, échéances et dépendances, et une IA privée qui fonctionne dans vos bureaux.',
      precio: 'Gratuit jusqu’à {gratis} utilisateurs. Du {desde1}e au {hasta1}e, {precio1} par utilisateur et par mois ; jusqu’à {hasta2}, {precio2}.',
      equipos: 'Équipements recommandés (paiement unique) : Basique {basico} · IA {ia} · IA+ {iaPlus}.',
      enDesarrollo: 'Pas encore d’édition simultanée en temps réel ni d’application mobile : en développement.',
    },
    consultoria: {
      titulo: 'Conseil en IA et en ventes',
      texto:
        'Nous sommes un cabinet de conseil en IA et en ventes. Diagnostic, formation, assistants, automatisations et projets d’IA sur mesure, selon votre budget.',
      categorias: {
        estrategia: 'Stratégie et diagnostic',
        formacion: 'Formation',
        asistentes: 'Assistants et service client',
        automatizacion: 'Automatisation des processus',
        documentos: 'Documents et connaissances',
        datos: 'Données, analyse et prévision',
        medida: 'Développement sur mesure',
        cumplimiento: 'Conformité et gouvernance',
        soporte: 'Support et maintenance',
      },
      desde: 'à partir de {precio}',
      cuota: 'et à partir de {cuota} par mois',
      nota: 'Tarifs pour une microentreprise, hors taxes (catalogue du {fecha}). Pour les entreprises plus grandes, selon la proposition.',
      medida: 'Projets d’IA sur mesure : nous établissons le devis.',
    },
    energia: {
      titulo: 'Énergie',
      texto: 'Nous vous aidons à payer moins d’électricité et à savoir où chaque kilowatt est consommé.',
      particulares: {
        titulo: 'Étude de facture pour particuliers',
        texto: 'Nous examinons votre facture et la puissance souscrite pour {precio}. Nous vous remboursons si nous ne trouvons pas une économie d’au moins {precio} par an.',
      },
      empresas: {
        titulo: 'Entreprises (Espagne)',
        texto:
          '{precio} par point de fourniture, ou au succès : {porcentaje} de l’économie constatée sur les 12 premiers mois. Sans économie, nous ne facturons rien. Tarifs à 6 périodes, hôpitaux et promoteurs : sur mesure.',
      },
      comisiones: 'Aujourd’hui, nous ne percevons aucune commission d’aucun fournisseur d’énergie : nous vous recommandons ce qui vous convient.',
      monitorizacion: {
        titulo: 'Suivi avec Home Assistant et Grafana',
        texto: 'Nous mesurons la consommation de chaque tableau électrique et vous la consultez sur un tableau de bord. Les données restent sur un équipement dans votre bâtiment.',
        vivienda: 'Logement ou petit commerce (1 tableau)',
        pyme: 'PME ou commerce (jusqu’à 6 tableaux)',
        edificio: 'Immeuble, hôtel ou promoteur',
        granConsumidor: 'Hôpital ou gros consommateur',
        instalacionDesde: 'Installation à partir de {precio}',
        instalacionMedida: 'Installation sur mesure',
        cuota: '{precio} par mois',
        cuotaDesde: 'à partir de {precio} par mois',
        incluye: 'L’installation comprend les compteurs de ces points. L’abonnement comprend la maintenance, les sauvegardes, les mises à jour et un rapport mensuel.',
      },
      programa: 'Vous êtes conseiller en énergie ? Découvrez C. Eléctrica, dans la Suite.',
    },
    migracion: {
      titulo: 'Migration et cohabitation',
      texto: 'Nous reprenons vos données de l’ancien programme. Nous ne vous promettons que ce qui s’importe réellement aujourd’hui.',
      arranque: {
        nombre: 'Démarrage',
        texto: 'Fournisseurs, salariés, produits et contacts depuis CSV ou Excel ; relevés de n’importe quelle banque (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Comptabilité antérieure (Andorre)',
        texto: 'Journal, grands livres et balance, vérifiés et intégrés ; états du 805-B ; registre des factures émises ; factures fournisseurs en PDF.',
        precio: '{precio} le premier exercice et {adicional} par exercice supplémentaire',
      },
      personal: {
        nombre: 'Personnel (Andorre)',
        texto: 'Historique des bulletins de paie, cotisations à la CASS, congés et heures.',
        precio: '{precio} jusqu’à {personas} personnes',
      },
      aMedida:
        'Le reste (clients, encaissements et paiements en attente, stock initial, immobilisations, connexion directe avec d’autres programmes) : sur mesure.',
      convivencia: {
        titulo: 'Cohabitation avec votre programme',
        texto:
          'Si vous souhaitez conserver votre programme un certain temps, nous chargeons chaque mois ce qu’il exporte : {puesta} de mise en service et {cuota} par mois, jusqu’à {cargas} chargements par mois. Une connexion directe, sur mesure.',
      },
    },
    portal: {
      titulo: 'Portail du salarié',
      texto: 'Bulletins de paie, documents, congés, demandes, pointage, profil et attestations, depuis n’importe quel navigateur.',
      dato:
        'Dans l’atelier où il est né, dès le deuxième mois, près de 8 personnes sur 10 ayant travaillé le mois entier pointaient déjà depuis le portail. Sans papier et sans aucun pointage à la main.',
      precio:
        'Seul, sans le reste du programme : {cuota} par mois jusqu’à {personas} personnes, {adicional} par personne supplémentaire et {implantacion} de mise en place.',
      incluido: 'Avec Ressources humaines, il est déjà inclus.',
    },
    webs: {
      titulo: 'Sites web',
      texto: 'Des sites rapides, en plusieurs langues, avec un formulaire qui envoie réellement et des statistiques sans cookies. Ce site a été conçu ainsi.',
      esencial: { nombre: 'Web Essentiel', texto: 'Une page de présentation, en 1 ou 2 langues.' },
      profesional: { nombre: 'Web Professionnel', texto: 'Jusqu’à 6 pages, 3 langues et référencement de base.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Jusqu’à 12 pages, jusqu’à 7 langues, identité de marque et un calculateur ou configurateur sur mesure.',
      },
      desde: 'à partir de {precio}',
      tienda: 'Boutique en ligne : sur mesure, sur devis.',
      extras: 'Page supplémentaire, {pagina} ; langue supplémentaire, {idioma} (la relecture native en sus).',
      mantenimiento: 'Maintenance : {basico} par mois (1 heure de modifications) ou {plus} par mois (3 heures et rapport mensuel des visites).',
    },
    centralita: {
      titulo: 'Standard téléphonique avec IA pour cabinets médicaux',
      etiqueta: 'Prochainement',
      texto:
        'Un standard qui répond aux appels des patients 24 heures sur 24 : réservations, annulations et changements de rendez-vous, liste d’attente et rappels. Il indique toujours au patient qu’il parle à une IA. Pour les cabinets médicaux et les cliniques dentaires d’Andorre et d’Espagne.',
      boton: 'Je souhaite en savoir plus',
    },
    implantacion: {
      titulo: 'Mise en place et support',
      texto: 'Nous installons, configurons, chargeons les données et formons votre équipe : {jornada} la journée ; la Suite, à partir de {minimo} journées.',
      soporte: 'Support par e-mail et par téléphone, du lundi au vendredi de 9 h 00 à 18 h 00 (heure d’Andorre), avec réponse sous un jour ouvré.',
    },
  },
  precios: {
    titulo: 'Tarifs · Synentor',
    descripcion: 'Calculez à l’instant le prix de Synentor Suite ERP-CRM et de MUV, sans surprise.',
    encabezado: 'Calculez votre prix.',
    entrada: 'Choisissez le pays, les modules et le nombre de personnes. Le total s’affiche à l’instant, hors taxes ; en Andorre, également avec l’IGI.',
    configurador: {
      pais: 'Pays',
      paises: { AD: 'Andorre', ES: 'Espagne', PT: 'Portugal', FR: 'France', IT: 'Italie', DE: 'Allemagne', OTRO: 'Autre pays' },
      modalidad: 'Où le souhaitez-vous',
      modalidadA: 'Installé dans votre entreprise',
      modalidadB: 'Hébergé par Synentor en Andorre (+{precio} par mois)',
      pago: 'Paiement',
      anual: 'Annuel',
      mensual: 'Mensuel (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Pack Synentor Complet',
      paqueteTexto: 'Base, Achats, Ventes et CRM, Fiscalité et MUV, avec {usuarios} utilisateurs : {precio} par mois.',
      usuarios: 'Utilisateurs du programme',
      empresa: 'Entreprise {n}',
      principal: 'Entreprise principale',
      personas: 'Personnes dans l’effectif',
      anadirEmpresa: 'Ajouter une entreprise',
      quitarEmpresa: 'Retirer cette entreprise',
      menos: 'Moins',
      mas: 'Plus',
      verResumen: 'Voir le devis',
      alMes: 'par mois',
      muvUsuarios: 'Utilisateurs de MUV',
      anadidoPor: 'Ajouté : requis par un autre module',
      incluidoPaquete: 'Inclus dans le pack',
      estados: { disponible: 'Disponible', inminente: 'En développement imminent', a_medida: 'Sur mesure' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Pack Synentor Complet',
        'empresa-adicional': 'Entreprise supplémentaire',
        personas: 'Personnes dans l’effectif (Ressources humaines)',
        'usuarios-adicionales': 'Utilisateurs supplémentaires',
        'paquete-usuarios': 'Utilisateurs supplémentaires du pack',
        'modalidad-b': 'Hébergement par Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Paiement mensuel',
      },
      resumen: 'Votre devis',
      cuota: 'Mensualité',
      sinImpuestos: 'hors taxes',
      igi: 'IGI ({porcentaje})',
      total: 'Total par mois',
      implantacion: 'Mise en place, à partir de {precio} (paiement unique)',
      avisos: {
        'impuestos-no-incluidos': 'Taxes non comprises (IVA, TVA ou MwSt., selon le pays).',
        'cashdro-una-empresa': 'CashDro fonctionne dans une seule entreprise par installation.',
        'volumen-empresas': 'Au-delà de {max} entreprises, tarif dégressif : nous vous établissons une proposition.',
        'modalidad-b-inminente': 'L’hébergement par Synentor est en développement imminent.',
        'muv-a-medida': 'Au-delà de {max} utilisateurs de MUV, sur mesure.',
        'requiere-adaptacion': 'Un module n’est pas disponible aujourd’hui dans votre pays : en développement imminent ou sur mesure.',
      },
      botonDemo: 'Demandez une démonstration',
      botonPropuesta: 'Demandez votre proposition',
      botonPedido: 'Envoyer ma sélection',
      pedidoNota: 'Pas de paiement sur le site : nous vous répondons avec la proposition et le contrat par écrit.',
      pedidoAsunto: 'Demande de commande depuis le calculateur',
      sinJs: 'Le calculateur nécessite JavaScript. Consultez les tableaux ci-dessous ou écrivez-nous.',
    },
    tablas: {
      titulo: 'Tous les tarifs',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Élément',
      precio: 'Prix',
      alMes: '{precio} par mois',
      porPersona: '+ {precio} par personne dans l’effectif',
      usuarioAdicional: 'Utilisateur supplémentaire',
      empresaAdicional: 'Entreprise supplémentaire',
      empresaAdicionalPrecio: '{precio} par mois + ses modules à {porcentaje}',
      paquete: 'Pack Synentor Complet',
      paqueteUsuario: 'Utilisateur supplémentaire du pack : {precio} par mois',
      muv: 'MUV',
      consultoria: 'Conseil en IA et en ventes',
      servicios: 'Énergie, migrations, portail et sites web',
      verServicios: 'Tous les détails, dans Services',
      implantacion: 'Mise en place : {precio} la journée',
    },
    condiciones: {
      titulo: 'Conditions',
      puntos: [
        'Licence annuelle, sans engagement de plus de 12 mois et avec un préavis de 30 jours.',
        'Support et mises à jour inclus.',
        'À la fin, nous vous remettons l’archive contenant les données de votre entreprise.',
        'Prix en euros, hors taxes. En Andorre, IGI de {igi}.',
        'Paiement mensuel : {recargo} en plus.',
      ],
    },
    comparacion: {
      titulo: 'Comment nous nous situons',
      texto:
        'Un logiciel de paie en ligne facture entre {nominaMin} et {nominaMax} par personne et par mois, plus un abonnement fixe. Un ERP international, environ {erp} par utilisateur et par mois. Avec Synentor, vous payez par entreprise et les {usuarios} premiers utilisateurs sont inclus.',
      fuente: 'Sources : pages officielles de tarifs des éditeurs, consultées le {fecha}.',
      grafico: {
        titulo: 'Exemple : entreprise de {personas} personnes et {usuarios} utilisateurs, par mois',
        synentor: 'Synentor : Base, Achats, RH, Fiscalité, Produits et TPV',
        separado: 'Logiciel de paie en ligne + ERP international, séparément',
        rango: 'de {min} à {max}',
        nota: 'Hors taxes. Séparément, aucun des deux ne gère la paie ni la CASS andorranes.',
      },
    },
    faq: {
      titulo: 'Questions fréquentes',
      preguntas: [
        {
          p: 'Dans quelles langues le programme est-il disponible ?',
          r: 'En castillan et en catalan. Les autres langues sont en développement imminent et adaptation sur mesure au client.',
        },
        {
          p: 'Où est-il installé ?',
          r: 'Dans votre entreprise, sur un serveur ou un NAS : disponible aujourd’hui. Hébergé par Synentor en Andorre : en développement imminent.',
        },
        {
          p: 'Les données partent-elles dans le cloud ?',
          r: 'Les factures des fournisseurs et les documents des personnes sont lus par une IA qui fonctionne sur un équipement de votre entreprise. Si une fonction utilise un service externe, nous vous l’indiquons dans la proposition.',
        },
        { p: 'Fonctionne-t-il en Espagne ?', r: 'Oui. Certains modules sont disponibles aujourd’hui et d’autres en développement imminent : le calculateur vous l’indique module par module.' },
        { p: 'Y a-t-il un engagement ?', r: 'Licence annuelle, sans engagement de plus de 12 mois et avec un préavis de 30 jours.' },
        { p: 'Qui utilise Synentor ?', r: 'Il est né en gérant chaque jour un atelier avec des boutiques d’Andorre. Et c’est le programme avec lequel travaille Synentor.' },
      ],
    },
  },
  legal: {
    actualizado: 'Dernière mise à jour : {fecha}',
    aviso: {
      titulo: 'Mentions légales · Synentor',
      encabezado: 'Mentions légales',
      secciones: [
        {
          t: 'Éditeur',
          p: 'Ce site appartient à {razon}, domiciliée à {direccion}. E-mail : {correo}. Téléphone : {telefono}. NRT : en cours d’attribution.',
        },
        {
          t: 'Utilisation du site',
          p: 'Les informations de ce site sont données à titre indicatif. Les prix et les conditions qui font foi sont ceux de la proposition que nous vous remettons par écrit.',
        },
        {
          t: 'Propriété intellectuelle',
          p: 'Les textes, le logotype et la conception de ce site appartiennent à {razon}. Ne les utilisez pas sans notre autorisation.',
        },
        { t: 'Loi applicable', p: 'La loi andorrane s’applique. Pour tout litige, les tribunaux de la Principauté d’Andorre sont compétents.' },
      ],
    },
    privacidad: {
      titulo: 'Politique de confidentialité · Synentor',
      encabezado: 'Politique de confidentialité',
      secciones: [
        { t: 'Qui est le responsable', p: '{razon}, {direccion}. E-mail : {correo}.' },
        { t: 'Délégué à la protection des données', p: '{razon} n’a pas désigné de délégué à la protection des données. Pour toute question sur vos données, écrivez à {correo}.' },
        {
          t: 'Quelles données nous traitons',
          p: 'Celles du formulaire de contact : nom, e-mail, entreprise et téléphone (ces deux derniers, si vous les renseignez), objet et message. Le message nous parvient par e-mail : le site ne le conserve pas.',
        },
        { t: 'Dans quel but', p: 'Pour vous répondre et, si vous le demandez, vous préparer une proposition. La base est votre consentement.' },
        { t: 'Pendant combien de temps', p: 'Le temps nécessaire pour vous répondre et celui qu’exige la loi.' },
        {
          t: 'Qui d’autre les voit',
          p: 'Les prestataires qui font fonctionner le site : l’hébergement et la vérification anti-robot (Cloudflare) et l’envoi de l’e-mail. Les statistiques de visites (Umami) n’utilisent pas de cookies et ne conservent aucune donnée qui vous identifie.',
        },
        {
          t: 'Vos droits',
          p: 'Vous pouvez demander l’accès, la rectification, l’effacement, l’opposition, la limitation et la portabilité en écrivant à {correo}. Si vous n’êtes pas d’accord, vous pouvez introduire une réclamation auprès de l’Agence andorrane de protection des données (apda.ad).',
        },
        {
          t: 'Lois',
          p: 'Loi andorrane de protection des données personnelles (Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals) et Règlement général sur la protection des données (RGPD) de l’Union européenne pour les personnes de l’UE.',
        },
      ],
    },
    cookies: {
      titulo: 'Politique de cookies · Synentor',
      encabezado: 'Politique de cookies',
      secciones: [
        {
          t: 'Ce que nous utilisons',
          p: 'Un seul cookie, « lang », qui conserve la langue que vous choisissez (un an). Et, dans votre navigateur, un repère pour ne plus vous afficher l’avis de langue si vous le fermez.',
        },
        { t: 'Statistiques', p: 'Nous comptons les visites avec Umami, sans cookies et sans conserver de données qui vous identifient.' },
        { t: 'Comment les supprimer', p: 'Vous pouvez les effacer à tout moment depuis les paramètres de votre navigateur.' },
      ],
    },
  },
};
