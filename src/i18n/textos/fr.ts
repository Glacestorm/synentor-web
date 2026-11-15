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
        gestorias: 'Pack pour cabinets comptables et de gestion',
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
      costes: {
        nombre: 'Contrôle des coûts d’achat',
        texto: 'Comparateur de prix par fournisseur et par article, contrôle des commandes et alertes en cas de hausse. Avec les recettes, le coût de chacune ; avec le TPV, la consommation théorique et la marge par pièce.',
      },
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
    costes: {
      titulo: 'Contrôle des coûts d’achat',
      texto: 'Chaque facture et chaque bon de livraison qui arrivent dans Achats deviennent des informations pour mieux acheter. {precio} par mois, en complément d’Achats.',
      puntos: [
        'Comparateur de prix : chaque ligne est ramenée à un prix au kilo, au litre ou à l’unité et, pour chaque article, vous voyez quel fournisseur revient le moins cher et combien vous auriez économisé. Chaque montant ouvre sa facture d’origine.',
        'Panier d’achat : prépare des commandes en brouillon pour le fournisseur le moins cher.',
        'Historique des prix payés, offres tarifaires des fournisseurs et prix suspects.',
        'Remises de chaque fournisseur et contrôle des commandes : ce qui a été commandé, reçu et facturé, comparé au prix promis.',
        'Alertes sur le tableau de bord lorsqu’un fournisseur augmente le prix d’un article de 8 % ou plus, lorsque vous payez un fournisseur plus cher qu’un autre pour le même article ou lorsqu’une facture dépasse le prix de la commande.',
      ],
      condicionesTitulo: 'Avec recettes et TPV',
      condiciones: [
        'Avec les recettes (module Produits) : le coût à jour de chaque recette aux derniers prix payés.',
        'Avec les recettes et le TPV connecté (aujourd’hui, HIOPOS) : la consommation théorique comparée aux achats et la marge par pièce.',
      ],
      nota: 'Chaque libellé du fournisseur est associé une seule fois à son article. Les alertes s’affichent sur le tableau de bord ; elles ne sont pas envoyées par e-mail.',
      enlace: 'Ajoutez-le dans le calculateur',
    },
    gestorias: {
      titulo: 'Pack Cabinets comptables et de gestion',
      estado: 'En développement imminent et adaptation sur mesure au client',
      texto: 'Pour les cabinets qui tiennent la comptabilité, la fiscalité et la paie des entreprises de leurs clients, le tout dans une seule installation.',
      precio: '{precio} par mois',
      puntos: [
        'Comprend Comptabilité, Achats avec lecture des factures, Ventes, Fiscalité et Paie.',
        '{empresas} entreprises clientes et {usuarios} utilisateurs du cabinet inclus.',
        'Entreprise cliente supplémentaire : {empresa} par mois, jusqu’à {max} entreprises.',
        'Paie : {nomina} par personne et par mois.',
        'Utilisateur supplémentaire du cabinet : {usuario} par mois.',
        'Au-delà de {max} entreprises, sur proposition.',
      ],
      ejemplo: 'Exemple : {empresasEj} entreprises et {personasEj} personnes, {totalEj} par mois.',
      condiciones: 'Réservé aux cabinets professionnels qui gèrent les entreprises de leurs clients. Pour Andorre ; dans les autres pays, sur mesure. Hors taxes, paiement annuel.',
      boton: 'Demandez une proposition',
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
      paqueteTitulo: 'Pack',
      sinPaquete: 'Sans pack : modules à la carte',
      paqueteObrador: 'Pack Obrador',
      paqueteObradorTexto: 'Base, Achats, Produits, TPV et Ressources humaines, avec {usuarios} utilisateurs : {precio} par mois ; avec le contrôle des coûts, {conCostes}.',
      conObrador: 'Avec le pack Obrador',
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
        'paquete-obrador': 'Pack Obrador',
        'paquete-obrador-costes': 'Pack Obrador avec contrôle des coûts',
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
      paqueteObrador: 'Pack Obrador',
      gestorias: 'Pack Cabinets comptables et de gestion',
      gestoriasPrecio: '{precio} par mois avec {empresas} entreprises et {usuarios} utilisateurs ; {empresa} par entreprise supplémentaire (jusqu’à {max}) et {nomina} par bulletin de paie',
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
    enlaces: {
      privacidad: 'politique de confidentialité',
      cookies: 'politique de cookies',
    },
    aviso: {
      titulo: 'Mentions légales · Synentor',
      encabezado: 'Mentions légales',
      secciones: [
        {
          t: 'Qui est le titulaire du site',
          p: [
            'Ce site, {web}, appartient à {razon}, société andorrane domiciliée {direccion}. NRT (numéro fiscal andorran) : en cours.',
            'Pour toute question, écrivez-nous à {correo} ou appelez-nous au {telefono}.',
          ],
        },
        {
          t: 'À quoi sert ce site',
          p: [
            'Il présente nos services de conseil en intelligence artificielle et en vente, ainsi que nos logiciels. L’accès est gratuit et aucune inscription n’est nécessaire.',
            'Rien ne s’achète ni ne se paie sur le site. Les prix affichés sont indicatifs et hors taxes : ce qui compte, c’est la proposition et le contrat que nous signons avec vous par écrit.',
          ],
        },
        {
          t: 'Comment vous pouvez l’utiliser',
          p: [
            'Toute personne qui utilise le site est responsable de l’usage qu’elle en fait. Il est interdit de :',
          ],
          lista: [
            'l’utiliser de manière contraire à la loi ou aux droits d’autres personnes ;',
            'tenter de s’introduire dans ses serveurs, d’en modifier la configuration ou de contourner ses mesures de sécurité ;',
            'envoyer par le formulaire des contenus illicites ou offensants, de la publicité que nous n’avons pas demandée ou des données d’autres personnes sans leur autorisation ;',
            'l’afficher dans un autre site ou le copier de manière automatisée.',
          ],
          despues: [
            'Si quelqu’un ne respecte pas ces conditions, nous pouvons lui interdire l’accès.',
          ],
        },
        {
          t: 'Responsabilité',
          p: [
            'Nous veillons à ce que les informations soient exactes et à jour, mais elles peuvent contenir des erreurs ou des données obsolètes : nous les corrigeons dès que nous les constatons. Nous ne sommes pas responsables des dommages que pourrait causer l’utilisation des informations du site, ni des interruptions dues à la maintenance, à des pannes ou à des causes qui ne dépendent pas de nous, même si nous prenons des mesures raisonnables pour les éviter.',
          ],
        },
        {
          t: 'Liens vers d’autres sites',
          p: [
            'Le site contient des liens vers des pages d’autres entreprises et organismes. Nous ne les contrôlons pas et ne répondons pas de leur contenu, et ces liens ne signifient pas que nous ayons une relation avec eux. Consultez leurs propres conditions.',
          ],
        },
        {
          t: 'Propriété intellectuelle et industrielle',
          p: [
            'La marque et le logo Synentor, les textes, le design, les images et le code de ce site appartiennent à {razon} ou à ceux qui nous ont autorisés à les utiliser. Vous pouvez les consulter et en conserver une copie pour votre usage personnel. Pour tout autre usage (les copier, les publier, les modifier ou les utiliser à des fins commerciales), notre autorisation écrite est nécessaire.',
          ],
        },
        {
          t: 'Données personnelles et cookies',
          p: [
            'La façon dont nous traitons les données que vous nous communiquez est expliquée dans la {privacidad}, et les cookies que nous utilisons, dans la {cookies}.',
          ],
        },
        {
          t: 'Langues',
          p: [
            'Le site est disponible en catalan, espagnol, anglais, français, portugais, italien et allemand. Si une traduction ne dit pas la même chose que le texte en catalan, c’est le catalan qui prévaut.',
          ],
        },
        {
          t: 'Loi applicable et tribunaux',
          p: [
            'Les présentes conditions sont régies par la loi andorrane. Tout litige relève de la compétence des tribunaux de la Principauté d’Andorre, sauf si la loi vous reconnaît le droit de saisir d’autres tribunaux.',
          ],
        },
        {
          t: 'Modifications',
          p: [
            'Nous pouvons modifier les présentes mentions légales lorsque cela est nécessaire. La date indiquée en haut de la page précise quand elles ont été modifiées pour la dernière fois.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Politique de confidentialité · Synentor',
      encabezado: 'Politique de confidentialité',
      secciones: [
        {
          t: 'Qui traite vos données',
          p: [
            'Le responsable du traitement est {razon}, société andorrane domiciliée {direccion}. NRT (numéro fiscal andorran) : en cours. E-mail : {correo}. Téléphone : {telefono}.',
            'Nous n’avons pas désigné de délégué à la protection des données : pour toute question concernant vos données, écrivez-nous à {correo}.',
          ],
        },
        {
          t: 'Quelles données nous traitons, pourquoi et pendant combien de temps',
          p: [
            'Uniquement celles qui sont nécessaires à chaque finalité :',
          ],
          lista: [
            'Formulaire de contact. Données : nom, e-mail, objet et message, ainsi que l’entreprise et le téléphone si vous les indiquez. Finalité : vous répondre et, si vous le demandez, vous préparer une proposition. Base légale : votre consentement, que vous donnez en cochant la case, et, si vous demandez une proposition, les mesures précontractuelles. Durée : le message nous parvient par e-mail et le site ne le conserve pas ; nous le conservons {plazoContacto} à compter du dernier contact si vous ne devenez pas client et, si vous le devenez, pendant toute la durée de la relation et les délais exigés par la loi.',
            'Vérification anti-robots du formulaire (Cloudflare Turnstile). Données : l’adresse IP et des données techniques du navigateur. Finalité : vérifier que le formulaire est envoyé par une personne. Base légale : notre intérêt légitime à protéger le site contre les abus. Nous ne les conservons pas.',
            'Preuve de votre choix concernant les cookies. Données : un identifiant aléatoire qui ne vous identifie pas, la version de la politique, ce que vous avez décidé et la date ; jamais l’adresse IP. Finalité : pouvoir prouver votre consentement. Base légale : l’obligation de pouvoir le prouver. Durée : 12 mois.',
            'Journaux techniques de l’hébergement (Cloudflare). Données : l’adresse IP, la date et l’heure, la page demandée et les erreurs. Finalité : la sécurité et le bon fonctionnement du site. Base légale : notre intérêt légitime. Durée : jusqu’à {plazoRegistros}.',
            'Statistiques de visites (Umami). Sans cookies et sans données qui vous identifient : uniquement des chiffres globaux, comme les pages vues, le pays ou le navigateur.',
            'Cookies d’autres entreprises, uniquement si vous les acceptez : tout est expliqué dans la {cookies}.',
            'Si vous nous écrivez par e-mail ou nous appelez : vos coordonnées et ce que vous nous dites, pour vous répondre, avec la même base légale et la même durée que pour le formulaire.',
          ],
        },
        {
          t: 'Qui d’autre voit vos données',
          p: [
            'Nous ne vendons ni ne cédons vos données. Elles ne sont traitées que par les prestataires qui, pour notre compte, font fonctionner le site et la messagerie, et par les administrations lorsque la loi l’exige :',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Données hors d’Andorre',
          p: [
            'Certains de ces prestataires sont établis aux États-Unis ou y traitent des données. Nous choisissons des prestataires adhérant au cadre de protection des données UE-États-Unis ou qui s’engagent contractuellement au moyen de clauses contractuelles types. Malgré cela, les États-Unis n’offrent pas le même niveau de protection qu’Andorre ou l’Union européenne, et leurs autorités pourraient demander l’accès à ces données.',
          ],
        },
        {
          t: 'Vos droits',
          p: [
            'Vous pouvez nous demander d’accéder à vos données, de les rectifier, de les effacer, d’en limiter le traitement ou de vous les remettre pour les emporter (portabilité), ou encore vous opposer à leur traitement. Vous pouvez aussi retirer votre consentement quand vous le souhaitez, sans que cela affecte ce qui a été fait auparavant.',
            'Écrivez-nous à {correo}. Si nous ne pouvons pas vérifier qu’il s’agit bien de vous, nous vous demanderons un document permettant de vous identifier, que nous n’utiliserons qu’à cette fin et que nous effacerons ensuite. Nous vous répondrons dans le délai prévu par la loi.',
            'Si vous estimez que nous n’avons pas correctement donné suite à vos droits, vous pouvez introduire une réclamation auprès de l’Agència Andorrana de Protecció de Dades (Agence andorrane de protection des données, APDA) : {apda}.',
          ],
        },
        {
          t: 'Sécurité',
          p: [
            'Nous protégeons vos données par des mesures techniques et organisationnelles : connexion chiffrée, accès réservé aux personnes qui en ont besoin et prestataires offrant des garanties de sécurité.',
          ],
        },
        {
          t: 'Mineurs',
          p: [
            'Le site s’adresse aux entreprises et aux professionnels. Si vous avez moins de 16 ans, ne nous envoyez pas de données sans l’autorisation de votre père, de votre mère ou de votre tuteur.',
          ],
        },
        {
          t: 'Lois que nous appliquons',
          p: [
            'La Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (loi qualifiée andorrane 29/2021, du 28 octobre, de protection des données personnelles, LQPD) et, pour les personnes de l’Union européenne, le Règlement général sur la protection des données (RGPD).',
          ],
        },
        {
          t: 'Modifications',
          p: [
            'Si nous modifions cette politique, nous l’indiquerons ici avec la nouvelle date. Si la modification concerne quelque chose à quoi vous avez consenti, nous vous poserons de nouveau la question.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Politique de cookies · Synentor',
      encabezado: 'Politique de cookies',
      ninguna: 'Nous n’en utilisons aucun pour le moment. Si nous en utilisons un jour, nous vous poserons la question avant et ils apparaîtront ici.',
      secciones: [
        {
          t: 'Ce que sont les cookies',
          p: [
            'Les cookies sont de petits fichiers qu’un site enregistre dans votre navigateur pour se souvenir de quelque chose de votre visite. Ici, nous appelons aussi cookies d’autres moyens d’enregistrer des données dans le navigateur, comme le stockage local.',
          ],
        },
        {
          t: 'Ceux que nous utilisons toujours',
          p: [
            'Ce sont ceux qui sont indispensables au fonctionnement du site ou pour mémoriser vos choix. Ils ne nécessitent pas votre consentement.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Statistiques sans cookies',
          p: [
            'Nous comptons les visites avec Umami, qui n’utilise pas de cookies et ne conserve aucune donnée qui vous identifie.',
          ],
        },
        {
          t: 'Ceux que nous n’utilisons que si vous les acceptez',
          p: [
            'Il y en a de deux types : statistiques, pour savoir comment le site est utilisé et l’améliorer, et publicité, pour mesurer nos annonces et vous montrer des annonces de Synentor sur d’autres sites. Tant que vous ne les acceptez pas, le site ne charge pas ces outils.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'Votre choix',
          p: [
            'La première fois, nous vous posons la question au moyen d’un bandeau : vous pouvez tous les accepter, tous les refuser ou choisir. Les trois options sont aussi faciles d’accès l’une que l’autre et aucune n’est cochée par défaut.',
            'Vous pouvez changer d’avis à tout moment avec le bouton « {boton} » en bas de page. Si vous retirez votre consentement, nous supprimons les cookies de ces outils qui se trouvent sur notre domaine et le site cesse de les charger ; ceux que ces entreprises déposent sur leur propre domaine, vous pouvez les supprimer depuis votre navigateur.',
            'Votre choix est valable 12 mois ; ensuite, nous vous posons de nouveau la question. Nous en conservons une preuve sans votre adresse IP, comme l’explique la {privacidad}.',
          ],
        },
        {
          t: 'Depuis le navigateur',
          p: [
            'Vous pouvez aussi bloquer ou supprimer les cookies depuis votre navigateur :',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Révision',
          p: [
            'Nous revoyons cette politique au moins une fois par an et chaque fois que nous changeons les outils du site.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Qui le dépose',
      finalidad: 'Finalité',
      duracion: 'Durée',
      tipo: 'Type',
      propia: 'Le nôtre',
      terceros: 'D’une autre entreprise',
      sesion: 'Jusqu’à la fermeture du navigateur',
      persistente: 'Jusqu’à ce que vous le supprimiez',
      fijaProveedor: 'Fixée par le fournisseur',
      proveedor: 'Prestataire',
      para: 'Finalité',
      donde: 'Où il traite les données',
      garantia: 'Garantie',
    },
    finalidades: {
      lang: 'Mémoriser la langue que vous choisissez.',
      consentimiento: 'Enregistrer votre choix concernant les cookies.',
      franja: 'Ne plus vous afficher l’avis de langue si vous l’avez fermé (stockage local).',
      cfBm: 'Sécurité : distinguer les personnes des robots, uniquement lorsque Cloudflare en a besoin.',
      cfClearance: 'Sécurité : mémoriser que vous avez réussi une vérification anti-robots, uniquement si Cloudflare vous l’a demandée.',
      gaUsuario: 'Distinguer les visiteurs pour les statistiques.',
      gaSesion: 'Conserver l’état de la visite pour les statistiques.',
      clarityUsuario: 'Enregistrer l’identifiant de Clarity et ses préférences, uniquement pour ce site.',
      claritySesion: 'Réunir en un seul enregistrement les pages d’une même visite.',
      clarityPrimeraVez: 'Savoir quand Clarity a vu ce navigateur pour la première fois sur n’importe quel site qui l’utilise.',
      msAnonchk: 'Usage interne de Microsoft concernant l’identifiant MUID ; Clarity ne l’utilise pas à des fins publicitaires.',
      msMr: 'Savoir s’il faut renouveler l’identifiant MUID.',
      msMuid: 'Identifier le navigateur sur les sites de Microsoft.',
      msSm: 'Synchroniser l’identifiant MUID entre les domaines de Microsoft.',
      metaFbp: 'Identifier le navigateur pour mesurer et afficher des annonces de Meta.',
      metaFbc: 'Enregistrer l’annonce de Meta à l’origine de votre visite.',
      metaFr: 'Afficher et mesurer des annonces de Meta.',
      liFatId: 'Mesurer les résultats des annonces LinkedIn.',
      liSugr: 'Relier la visite à des membres de LinkedIn à des fins publicitaires.',
      liBcookie: 'Identifier le navigateur pour détecter les abus.',
      liLidc: 'Choisir le centre de données de LinkedIn.',
      liUserMatch: 'Synchroniser des identifiants à des fins publicitaires.',
      liAnalyticsSync: 'Enregistrer quand a eu lieu la synchronisation avec le cookie d’analyse de LinkedIn.',
      liLmsAds: 'Reconnaître des membres de LinkedIn en dehors de LinkedIn à des fins publicitaires.',
      liLmsAnalytics: 'Reconnaître des membres de LinkedIn en dehors de LinkedIn à des fins d’analyse.',
    },
    proveedores: {
      cloudflare: {
        para: 'Hébergement du site, vérification anti-robots du formulaire, preuve des consentements et journaux techniques.',
        donde: 'Son réseau mondial, avec un siège aux États-Unis. Les preuves de consentement sont conservées dans l’Union européenne.',
        garantia: 'Cadre de protection des données UE-États-Unis et clauses contractuelles types.',
      },
      resend: {
        para: 'Envoyer le message du formulaire à notre boîte de réception.',
        donde: 'États-Unis.',
        garantia: 'Clauses contractuelles types et cadre de protection des données UE-États-Unis.',
      },
      microsoft365: {
        para: 'La messagerie de l’entreprise, où nous recevons et conservons les messages.',
        donde: 'Union européenne (région européenne de Microsoft). L’entreprise est américaine.',
        garantia: 'Cadre de protection des données UE-États-Unis et clauses contractuelles types.',
      },
      umami: {
        para: 'Statistiques de visites sans cookies.',
        donde: 'Union européenne (Francfort, Allemagne). L’entreprise est américaine.',
        garantia: 'Clauses contractuelles types.',
      },
      google: {
        para: 'Statistiques de visites (Google Analytics), si vous les acceptez.',
        donde: 'États-Unis et autres pays.',
        garantia: 'Cadre de protection des données UE-États-Unis et clauses contractuelles types.',
      },
      clarity: {
        para: 'Voir comment le site est utilisé (Microsoft Clarity), si vous l’acceptez.',
        donde: 'États-Unis.',
        garantia: 'Cadre de protection des données UE-États-Unis.',
      },
      meta: {
        para: 'Mesurer et afficher des annonces (pixel Meta), si vous l’acceptez.',
        donde: 'Irlande et États-Unis.',
        garantia: 'Cadre de protection des données UE-États-Unis et clauses contractuelles types.',
      },
      linkedin: {
        para: 'Mesurer et afficher des annonces (LinkedIn Insight Tag), si vous l’acceptez.',
        donde: 'États-Unis.',
        garantia: 'Cadre de protection des données UE-États-Unis et clauses contractuelles types.',
      },
    },
  },
};
