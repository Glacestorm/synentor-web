// Textos en portugués de Portugal (no de Brasil). Mismas claves que el catalán (lo comprueba pruebas/textos.test.ts). Traducción de Claude, pendiente de una lectura nativa (diseño §3).
import type { Textos } from './ca';

export const pt: Textos = {
  meta: {
    marca: 'Synentor',
    lema: 'A sua empresa, ligada.',
    descripcion:
      'Consultoria de IA e vendas com software próprio feito em Andorra: Synentor Suite ERP-CRM multiempresa, MUV e trabalhos de IA por medida.',
  },
  nav: {
    inicio: 'Início',
    servicios: 'Serviços',
    precios: 'Preços',
    contacto: 'Contacto',
    demo: 'Peça uma demonstração',
    idioma: 'Idioma',
    menu: 'Menu',
    saltar: 'Ir para o conteúdo',
  },
  franjaIdioma: {
    idioma: 'português',
    texto: 'Quer ver esta página em {idioma}?',
    aceptar: 'Sim, mudar',
    cerrar: 'Não, obrigado',
  },
  pie: {
    empresa: 'Empresa',
    legal: 'Legal',
    avisoLegal: 'Aviso legal',
    privacidad: 'Privacidade',
    cookies: 'Cookies',
    nrt: 'NRT em curso',
    estadisticas: 'Estatísticas de visitas sem cookies (Umami).',
  },
  cookiesAviso: {
    titulo: 'Cookies',
    aviso: '{empresas} usam cookies para {finalidades}. Só são ativados se os aceitar. Pode recusá-los ou escolher, e mudar de ideias quando quiser com o botão dos cookies. Os dados podem sair de Andorra e da União Europeia.',
    y: ' e ',
    politica: 'Política de cookies',
    aceptar: 'Aceitar todos',
    rechazar: 'Recusar todos',
    configurar: 'Personalizar',
    guardar: 'Guardar a minha escolha',
    siempre: 'Sempre ativos',
    flotante: 'Definições de cookies',
    necesarias: { nombre: 'Necessários', texto: 'A língua que escolhe (cookie «lang», 1 ano), a sua escolha sobre os cookies («synentor_consentimiento», 12 meses) e a verificação antirrobôs do formulário de contacto (Cloudflare). Não podem ser desativados.' },
    estadisticas: { nombre: 'Estatísticas', texto: 'Que páginas são visitadas e como se navega, para melhorar o site. O Clarity grava a sessão com o que se escreve ocultado.', finalidad: 'medir as visitas' },
    publicidad: { nombre: 'Publicidade', texto: 'Para mostrar anúncios da Synentor a quem já visitou o site e saber se funcionam.', finalidad: 'mostrar-lhe anúncios da Synentor noutros sites' },
    herramientas: {
      ga4: 'Google Analytics (Google): cookies «_ga», até 13 meses.',
      clarity: 'Microsoft Clarity (Microsoft): cookie «_clck», 1 ano, e «_clsk», 1 dia.',
      metaPixel: 'Pixel da Meta (Meta Platforms): cookie «_fbp», 90 dias, e os da Meta no seu domínio.',
      linkedin: 'LinkedIn Insight Tag (LinkedIn): cookies do LinkedIn no seu domínio, até 1 ano.',
    },
  },
  estados: {
    disponible: 'Disponível',
    inminente: 'Em desenvolvimento iminente',
    a_medida: 'Por medida',
    inminenteLargo: 'Em desenvolvimento iminente e adaptação por medida ao cliente',
  },
  inicio: {
    titulo: 'Synentor · Consultoria de IA e vendas com software próprio',
    descripcion:
      'ERP-CRM multiempresa feito em Andorra, MUV e consultoria de IA e vendas. Contabilidade, salários, compras, vendas e tramitações num só lugar.',
    portada: {
      antetitulo: 'Consultoria de IA e vendas · Software próprio feito em Andorra',
      titulo: 'A sua empresa, ligada.',
      subtitulo:
        'Contabilidade, salários, compras, vendas e tramitações num só lugar. Com uma IA que faz o trabalho repetitivo e uma consultoria que o acompanha.',
      botonDemo: 'Peça uma demonstração',
      botonPrecio: 'Calcule o seu preço',
      nota: 'A partir de {base} por mês · {usuarios} utilizadores incluídos · sem impostos',
      animacion: { pausa: 'Pausar a animação', reanuda: 'Retomar a animação' },
      nodos: { compras: 'Compras', ventas: 'Vendas e CRM', rrhh: 'RH', contabilidad: 'Contabilidade', bancos: 'Bancos', muv: 'MUV' },
    },
    problema: {
      titulo: 'Demasiados programas. Demasiadas folhas de cálculo. Demasiado trabalho repetido.',
      puntos: [
        'Faturas que alguém tem de digitar uma a uma.',
        'Salários e CASS que dependem de uma só pessoa.',
        'Bancos que só batem certo no fim do mês.',
        'Leis que mudam no BOPA sem que você saiba.',
      ],
      cierre: 'A Synentor põe tudo no mesmo sítio e faz por si o trabalho que se repete.',
    },
    pilares: {
      titulo: 'Três formas de fazer crescer a sua empresa',
      suite: {
        titulo: 'Synentor Suite ERP-CRM',
        texto:
          'A gestão completa da empresa, feita para Andorra: contabilidade com o plano andorrano, tesouraria, compras, vendas e CRM, recursos humanos, fiscal e jurídico.',
      },
      muv: {
        titulo: 'MUV',
        texto:
          'O cérebro operativo da empresa: mapas de conhecimento, tarefas com responsáveis, datas e dependências, e uma IA privada que funciona no seu escritório.',
      },
      consultoria: {
        titulo: 'Consultoria de IA e vendas',
        texto: 'Diagnóstico, formação, assistentes e automatizações. E trabalhos de IA por medida, conforme o seu orçamento.',
      },
      mas: 'Descubra',
    },
    rrhh: {
      antetitulo: 'Recursos humanos',
      titulo: 'Recursos humanos de Andorra, a sério.',
      texto:
        'Ficha, contratos, inscrição na CASS, salário e IRPF andorrano, férias, horários, registo de ponto com portal do colaborador e acertos finais. Tudo ligado à contabilidade.',
      puntos: [
        'Os documentos das pessoas são lidos por uma IA que funciona nas suas instalações.',
        'Leitura dos documentos de identificação para preencher a ficha em segundos.',
        'Cada alteração fica registada.',
      ],
      espana:
        'Em Espanha: salários e leitura de convenções coletivas do registo oficial (REGCON e BOE), em desenvolvimento iminente e adaptação por medida ao cliente.',
      dato:
        'Na oficina onde nasceu, no segundo mês quase 8 em cada 10 pessoas que trabalharam o mês inteiro já registavam o ponto no portal do colaborador.',
      cifra: {
        etiqueta: 'registavam o ponto no portal do colaborador',
        texto: '{fichan} das {total} pessoas que trabalharam o mês inteiro ({mes}), na oficina onde nasceu a Synentor.',
        fuente: 'Dado medido: contagem na base de dados do programa, sem dados de pessoas.',
      },
    },
    multiempresa: {
      antetitulo: 'Multiempresa',
      titulo: 'Muitas empresas. Uma só instalação.',
      texto:
        'Cada empresa, isolada das outras, com os seus utilizadores e permissões. Ideal para grupos e gabinetes de contabilidade: muda de empresa num instante.',
      puntos: ['Paga por empresa, não por cada pessoa.', '{usuarios} utilizadores incluídos.', 'Empresa adicional: {empresaAdicional} por mês.'],
    },
    ia: {
      antetitulo: 'IA privada',
      titulo: 'A sua IA, em sua casa.',
      texto:
        'As faturas dos fornecedores e os documentos das pessoas são lidos por uma IA que funciona num equipamento da sua empresa. Esses documentos não saem para a nuvem.',
    },
    compras: {
      titulo: 'As faturas leem-se sozinhas.',
      texto:
        'Envie-as por correio eletrónico ou deixe-as numa pasta: a Synentor lê-as, regista o fornecedor se for preciso e prepara o rascunho para que só tenha de o rever.',
      pasos: ['Fatura por correio eletrónico', 'A IA lê-a', 'Rascunho para rever', 'Contabilizada'],
    },
    bancos: {
      titulo: 'Qualquer banco, reconciliado.',
      texto: 'Norma 43, OFX, MT940, CAMT.053, CSV ou Excel: a Synentor lê o extrato e propõe-lhe a reconciliação.',
      pasos: ['Extrato do banco', 'Movimentos lidos', 'Reconciliação proposta', 'Confirma-a você'],
    },
    juridico: {
      titulo: 'A lei andorrana, vigiada.',
      texto:
        'Vigilância do BOPA, tramitações oficiais com os respetivos prazos, livro de atos societários e prevenção do branqueamento de capitais para entidades obrigadas.',
    },
    historia: {
      antetitulo: 'Como nasceu',
      titulo: 'Nasce dentro de uma empresa real.',
      texto:
        'A Synentor não é uma maqueta: nasceu a gerir todos os dias uma empresa andorrana, uma oficina com lojas. Cada ecrã foi feito a resolver um problema verdadeiro.',
    },
    precio: {
      titulo: 'Um preço claro, sem surpresas.',
      texto: 'Escolha os módulos de que precisa e veja o total na hora. Os que andam juntos juntam-se sozinhos.',
      boton: 'Calcule o seu preço',
    },
    final: {
      titulo: 'Falemos da sua empresa.',
      texto: 'Mostramos-lhe a Synentor com casos como o seu e dizemos-lhe, sem compromisso, por onde começaríamos.',
      boton: 'Peça uma demonstração',
    },
  },
  contacto: {
    titulo: 'Contacto · Synentor',
    descripcion: 'Escreva-nos e respondemos num dia útil.',
    encabezado: 'Falemos.',
    entrada: 'Conte-nos do que precisa. Respondemos num dia útil, de segunda a sexta-feira, das 9:00 às 18:00 (hora de Andorra).',
    datos: 'Dados de contacto',
    correo: 'Correio eletrónico',
    telefono: 'Telefone',
    direccion: 'Morada',
    horario: 'Horário',
    horarioTexto: 'De segunda a sexta-feira, das 9:00 às 18:00 (hora de Andorra)',
    despues: {
      titulo: 'O que acontece depois',
      pasos: [
        'Recebemos a sua mensagem no correio eletrónico da empresa.',
        'Respondemos num dia útil.',
        'Se quiser, preparamos-lhe uma proposta por escrito.',
      ],
    },
    formulario: {
      titulo: 'Envie-nos uma mensagem',
      nombre: 'Nome',
      correo: 'Correio eletrónico',
      empresa: 'Empresa',
      telefono: 'Telefone',
      asunto: 'Assunto',
      asuntos: {
        informacion: 'Informação geral',
        demostracion: 'Pedir uma demonstração',
        pedido: 'Pedido de encomenda',
        centralita: 'Central telefónica com IA para consultórios',
        precios: 'Preços e orçamento',
        consultoria: 'Consultoria de IA e vendas',
        muv: 'MUV',
        web: 'Design de páginas web',
        gestorias: 'Pacote para gabinetes de contabilidade e gestão',
        otro: 'Outros',
      },
      mensaje: 'Mensagem',
      consentimiento: 'Li a {politica} e aceito que utilizem estes dados para me responder.',
      politica: 'política de privacidade',
      obligatorio: 'obrigatório',
      enviar: 'Enviar a mensagem',
      enviando: 'A enviar…',
      contador: '{n} de {max}',
      ok: 'Enviado. Responderemos num dia útil.',
      errores: {
        datos: 'Reveja os campos assinalados: falta algum dado ou não é válido.',
        robot: 'Não conseguimos verificar que não é um robô. Tente novamente.',
        envio: 'Não foi possível enviar neste momento.',
        red: 'Sem ligação.',
      },
      alternativa: 'Escreva-nos diretamente para {correo}.',
      sinJs: 'Se o formulário não funcionar, escreva-nos para {correo}.',
    },
  },
  servicios: {
    titulo: 'Serviços · Synentor',
    descripcion:
      'Synentor Suite ERP-CRM módulo a módulo, MUV, consultoria de IA e vendas, energia, migrações, portal do colaborador e páginas web.',
    encabezado: 'Tudo o que fazemos, sem letras pequenas.',
    entrada:
      'Software próprio e consultoria. Em cada módulo dizemos-lhe se funciona hoje no seu país, se está em desenvolvimento iminente ou se se adapta por medida.',
    columnas: { andorra: 'Andorra', espana: 'Espanha', otros: 'Portugal, França, Itália e Alemanha' },
    suite: {
      titulo: 'Synentor Suite ERP-CRM',
      texto: 'A gestão da empresa num só lugar. Paga por empresa e pelos módulos que utilizar.',
      requiere: 'Requer {modulo}',
      idiomaPrograma:
        'Os ecrãs do programa estão em castelhano e catalão. Outros idiomas, em desenvolvimento iminente e adaptação por medida ao cliente.',
    },
    modulos: {
      base: {
        nombre: 'Synentor Base',
        texto:
          'O motor multiempresa: utilizadores e permissões, cópias de segurança, IA local, entrada única de documentos, dados mestres, ficha da empresa e livro de atos, contabilidade com o plano andorrano, tesouraria e reconciliação bancária, painel de controlo e relatórios.',
      },
      compras: {
        nombre: 'Compras inteligentes',
        texto:
          'As faturas dos fornecedores chegam por correio eletrónico ou numa pasta e leem-se sozinhas: registo do fornecedor se for preciso e rascunho para rever.',
      },
      ventas_crm: {
        nombre: 'Vendas e CRM',
        texto: 'Clientes, projetos, contactos, mapa comercial e registo de faturas emitidas com o IGI.',
      },
      rrhh: {
        nombre: 'Recursos humanos e salários',
        texto:
          'Ficha, contratos, inscrição na CASS, salário e IRPF andorrano, férias, horários, registo de ponto, portal do colaborador e acertos finais.',
      },
      fiscal: { nombre: 'Fiscal', texto: 'IGI, imposto sobre as sociedades, declarações e impressos da DTF.' },
      juridico: {
        nombre: 'Jurídico e tramitações',
        texto: 'Vigilância do BOPA, tramitações oficiais com os respetivos prazos, processos e livro de atos societários.',
      },
      pbc: {
        nombre: 'Prevenção do branqueamento',
        texto: 'O dossiê de cada cliente para as entidades obrigadas: questionários, modelo de risco, decisões e comunicações à UIFAND.',
      },
      productos: { nombre: 'Produtos, fichas de custo e stock', texto: 'Produtos, receitas com o respetivo custo e stock.' },
      costes: {
        nombre: 'Controlo de custos de compra',
        texto: 'Comparador de preços por fornecedor e artigo, controlo da encomenda e avisos de subidas. Com receitas, o custo de cada uma; com o TPV, consumo teórico e margem por peça.',
      },
      tpv: {
        nombre: 'TPV e caixa',
        texto: 'As vendas do TPV HIOPOS e da caixa CashDro, todos os dias na contabilidade. CashDro, numa só empresa por instalação.',
      },
      electrica: {
        nombre: 'C. Eléctrica',
        texto:
          'Para consultores de energia: processos, clientes, pontos de fornecimento e CUPS, faturas com o respetivo PDF, contratos e vencimentos, comparação com o seu catálogo de tarifas, relatório e proposta em PDF, acompanhamento da poupança e portal do cliente. Mercado elétrico espanhol, tarifas até 3 períodos.',
      },
    },
    costes: {
      titulo: 'Controlo de custos de compra',
      texto: 'Cada fatura e cada guia de remessa que chegam a Compras transformam-se em informação para comprar melhor. {precio} por mês, como complemento de Compras.',
      puntos: [
        'Comparador de preços: cada linha é convertida em preço por quilo, litro ou unidade e, por artigo, vê qual o fornecedor mais barato e quanto teria poupado. Cada valor abre a respetiva fatura original.',
        'Cesto de compras: prepara encomendas em rascunho para o fornecedor mais barato.',
        'Histórico dos preços pagos, ofertas de tabelas de preços dos fornecedores e preços suspeitos.',
        'Descontos de cada fornecedor e controlo da encomenda: o que foi encomendado, recebido e faturado, face ao preço prometido.',
        'Avisos no painel de controlo quando um fornecedor aumenta o preço de um artigo em 8% ou mais, quando paga a um fornecedor mais do que a outro pelo mesmo artigo ou quando uma fatura ultrapassa o preço da encomenda.',
      ],
      condicionesTitulo: 'Com receitas e TPV',
      condiciones: [
        'Com receitas (módulo Produtos): o custo atualizado de cada receita com os últimos preços pagos.',
        'Com receitas e o TPV ligado (hoje, HIOPOS): o consumo teórico face ao que foi comprado e a margem por peça.',
      ],
      nota: 'Cada descrição do fornecedor é associada uma única vez ao respetivo artigo. Os avisos aparecem no painel de controlo; não chegam por correio eletrónico.',
      enlace: 'Adicione-o na calculadora',
    },
    gestorias: {
      titulo: 'Pacote Gabinetes de contabilidade e gestão',
      estado: 'Em desenvolvimento iminente e adaptação por medida ao cliente',
      texto: 'Para gabinetes que tratam da contabilidade, dos impostos e dos salários das empresas dos seus clientes, tudo numa só instalação.',
      precio: '{precio} por mês',
      puntos: [
        'Inclui Contabilidade, Compras com leitura de faturas, Vendas, Fiscal e Salários.',
        '{empresas} empresas cliente e {usuarios} utilizadores do gabinete incluídos.',
        'Empresa cliente adicional: {empresa} por mês, até {max} empresas.',
        'Salários: {nomina} por pessoa e por mês.',
        'Utilizador adicional do gabinete: {usuario} por mês.',
        'Com mais de {max} empresas, mediante proposta.',
      ],
      ejemplo: 'Exemplo: {empresasEj} empresas e {personasEj} pessoas, {totalEj} por mês.',
      condiciones: 'Apenas para gabinetes profissionais que tratam das empresas dos seus clientes. Para Andorra; noutros países, por medida. Sem impostos, pagamento anual.',
      boton: 'Peça uma proposta',
    },
    muv: {
      titulo: 'MUV',
      texto:
        'O cérebro operativo da empresa: mapas de conhecimento, tarefas com responsáveis, datas e dependências, e uma IA privada que funciona no seu escritório.',
      precio: 'Grátis até {gratis} utilizadores. Do {desde1}.º ao {hasta1}.º, {precio1} por utilizador por mês; até {hasta2}, {precio2}.',
      equipos: 'Equipamentos recomendados (pagamento único): Básico {basico} · IA {ia} · IA+ {iaPlus}.',
      enDesarrollo: 'Ainda não tem edição simultânea em tempo real nem aplicação móvel: em desenvolvimento.',
    },
    consultoria: {
      titulo: 'Consultoria de IA e vendas',
      texto:
        'Somos uma consultoria de IA e de vendas. Diagnóstico, formação, assistentes, automatizações e trabalhos de IA por medida, conforme o seu orçamento.',
      categorias: {
        estrategia: 'Estratégia e diagnóstico',
        formacion: 'Formação',
        asistentes: 'Assistentes e atendimento ao cliente',
        automatizacion: 'Automatização de processos',
        documentos: 'Documentos e conhecimento',
        datos: 'Dados, análise e previsão',
        medida: 'Desenvolvimento por medida',
        cumplimiento: 'Conformidade e governação',
        soporte: 'Suporte e manutenção',
      },
      desde: 'a partir de {precio}',
      cuota: 'e a partir de {cuota} por mês',
      nota: 'Preços para uma microempresa, sem impostos (catálogo de {fecha}). Para empresas maiores, conforme a proposta.',
      medida: 'Trabalhos de IA por medida: fazemos-lhe o orçamento.',
    },
    energia: {
      titulo: 'Energia',
      texto: 'Ajudamo-lo a pagar menos pela eletricidade e a saber onde se gasta cada quilowatt.',
      particulares: {
        titulo: 'Estudo de fatura para particulares',
        texto: 'Revemos a sua fatura e a potência contratada por {precio}. Devolvemos-lhe o valor se não encontrarmos uma poupança de, pelo menos, {precio} por ano.',
      },
      empresas: {
        titulo: 'Empresas (Espanha)',
        texto:
          '{precio} por ponto de fornecimento, ou à comissão de êxito: {porcentaje} da poupança comprovada dos primeiros 12 meses. Sem poupança, não cobramos. Tarifas de 6 períodos, hospitais e promotoras: por medida.',
      },
      comisiones: 'Hoje não recebemos nenhuma comissão de nenhuma comercializadora: recomendamos-lhe o que lhe convém a si.',
      monitorizacion: {
        titulo: 'Monitorização com Home Assistant e Grafana',
        texto: 'Medimos o consumo de cada quadro elétrico e vê-o num painel. Os dados ficam num equipamento no seu edifício.',
        vivienda: 'Habitação ou pequeno negócio (1 quadro)',
        pyme: 'PME ou comércio (até 6 quadros)',
        edificio: 'Edifício, hotel ou promotora',
        granConsumidor: 'Hospital ou grande consumidor',
        instalacionDesde: 'Instalação a partir de {precio}',
        instalacionMedida: 'Instalação por medida',
        cuota: '{precio} por mês',
        cuotaDesde: 'a partir de {precio} por mês',
        incluye: 'A instalação inclui os medidores desses pontos. A mensalidade inclui manutenção, cópias, atualizações e um relatório mensal.',
      },
      programa: 'É consultor de energia? Veja a C. Eléctrica, na Suite.',
    },
    migracion: {
      titulo: 'Migração e convivência',
      texto: 'Trazemos os seus dados do programa anterior. Só lhe prometemos o que hoje se importa de verdade.',
      arranque: {
        nombre: 'Arranque',
        texto: 'Fornecedores, colaboradores, produtos e contactos a partir de CSV ou Excel; extratos de qualquer banco (Norma 43, Excel, OFX, QIF, MT940, CAMT.053).',
        precio: '{precio}',
      },
      contabilidad: {
        nombre: 'Contabilidade anterior (Andorra)',
        texto: 'Diário, razões e balancetes, verificados e incorporados; demonstrações do 805-B; livro de faturas emitidas; faturas de fornecedores em PDF.',
        precio: '{precio} o primeiro exercício e {adicional} cada um adicional',
      },
      personal: {
        nombre: 'Pessoal (Andorra)',
        texto: 'Histórico de salários, contribuições da CASS, férias e horas.',
        precio: '{precio} até {personas} pessoas',
      },
      aMedida:
        'O resto (clientes, cobranças e pagamentos pendentes, stock inicial, imobilizado, ligação direta a outros programas): por medida.',
      convivencia: {
        titulo: 'Convivência com o seu programa',
        texto:
          'Se quiser continuar com o seu programa durante algum tempo, carregamos todos os meses o que ele exporta: {puesta} de arranque e {cuota} por mês, até {cargas} cargas por mês. Uma ligação direta, por medida.',
      },
    },
    portal: {
      titulo: 'Portal do colaborador',
      texto: 'Recibos de vencimento, documentos, férias, pedidos, registo de ponto, perfil e certificados, a partir de qualquer navegador.',
      dato:
        'Na oficina onde nasceu, no segundo mês quase 8 em cada 10 pessoas que trabalharam o mês inteiro já registavam o ponto no portal. Sem papel e sem nenhum registo de ponto manual.',
      precio:
        'Em separado, sem o resto do programa: {cuota} por mês até {personas} pessoas, {adicional} por cada pessoa adicional e {implantacion} de implementação.',
      incluido: 'Com Recursos humanos, já vem incluído.',
    },
    webs: {
      titulo: 'Páginas web',
      texto: 'Sites rápidos, em vários idiomas, com um formulário que envia a sério e estatísticas sem cookies. Este mesmo site foi feito assim.',
      esencial: { nombre: 'Web Essencial', texto: 'Uma página de apresentação, em 1 ou 2 idiomas.' },
      profesional: { nombre: 'Web Profissional', texto: 'Até 6 páginas, 3 idiomas e posicionamento básico.' },
      premium: {
        nombre: 'Web Premium',
        texto: 'Até 12 páginas, até 7 idiomas, design de marca e uma calculadora ou configurador por medida.',
      },
      desde: 'a partir de {precio}',
      tienda: 'Loja online: por medida, conforme orçamento.',
      extras: 'Página adicional, {pagina}; idioma adicional, {idioma} (a revisão nativa, à parte).',
      mantenimiento: 'Manutenção: {basico} por mês (1 hora de alterações) ou {plus} por mês (3 horas e relatório mensal de visitas).',
    },
    centralita: {
      titulo: 'Central telefónica com IA para consultórios',
      etiqueta: 'Brevemente',
      texto:
        'Uma central telefónica que atende as chamadas dos pacientes 24 horas por dia: marcações, cancelamentos e alterações de consulta, lista de espera e lembretes. Diz sempre ao paciente que está a falar com uma IA. Para consultórios médicos e clínicas dentárias de Andorra e Espanha.',
      boton: 'Quero mais informação',
    },
    implantacion: {
      titulo: 'Implementação e suporte',
      texto: 'Instalamos, configuramos, carregamos os dados e formamos a sua equipa: {jornada} por dia de trabalho; a Suite, a partir de {minimo} dias.',
      soporte: 'Suporte por correio eletrónico e telefone, de segunda a sexta-feira, das 9:00 às 18:00 (hora de Andorra), com resposta num dia útil.',
    },
  },
  precios: {
    titulo: 'Preços · Synentor',
    descripcion: 'Calcule na hora o preço da Synentor Suite ERP-CRM e do MUV, sem surpresas.',
    encabezado: 'Calcule o seu preço.',
    entrada: 'Escolha o país, os módulos e as pessoas. O total aparece na hora, sem impostos; em Andorra, também com o IGI.',
    configurador: {
      pais: 'País',
      paises: { AD: 'Andorra', ES: 'Espanha', PT: 'Portugal', FR: 'França', IT: 'Itália', DE: 'Alemanha', OTRO: 'Outro país' },
      modalidad: 'Onde o quer',
      modalidadA: 'Instalado na sua empresa',
      modalidadB: 'Alojado pela Synentor em Andorra (+{precio} por mês)',
      pago: 'Pagamento',
      anual: 'Anual',
      mensual: 'Mensal (+{porcentaje})',
      suite: 'Synentor Suite ERP-CRM',
      paquete: 'Pacote Synentor Completo',
      paqueteTexto: 'Base, Compras, Vendas e CRM, Fiscal e MUV, com {usuarios} utilizadores: {precio} por mês.',
      paqueteTitulo: 'Pacote',
      sinPaquete: 'Sem pacote: módulos à escolha',
      paqueteObrador: 'Pacote Obrador',
      paqueteObradorTexto: 'Base, Compras, Produtos, TPV e Recursos humanos, com {usuarios} utilizadores: {precio} por mês; com o controlo de custos, {conCostes}.',
      conObrador: 'Com o pacote Obrador',
      usuarios: 'Utilizadores do programa',
      empresa: 'Empresa {n}',
      principal: 'Empresa principal',
      personas: 'Pessoas no quadro',
      anadirEmpresa: 'Adicionar uma empresa',
      quitarEmpresa: 'Remover esta empresa',
      menos: 'Menos',
      mas: 'Mais',
      verResumen: 'Ver o orçamento',
      alMes: 'por mês',
      muvUsuarios: 'Utilizadores do MUV',
      anadidoPor: 'Adicionado: é exigido por outro módulo',
      incluidoPaquete: 'Incluído no pacote',
      estados: { disponible: 'Disponível', inminente: 'Em desenvolvimento iminente', a_medida: 'Por medida' },
      lineas: {
        base: 'Synentor Base',
        paquete: 'Pacote Synentor Completo',
        'empresa-adicional': 'Empresa adicional',
        personas: 'Pessoas no quadro (Recursos humanos)',
        'usuarios-adicionales': 'Utilizadores adicionais',
        'paquete-usuarios': 'Utilizadores adicionais do pacote',
        'paquete-obrador': 'Pacote Obrador',
        'paquete-obrador-costes': 'Pacote Obrador com controlo de custos',
        'modalidad-b': 'Alojamento pela Synentor',
        'muv-usuarios': 'MUV',
        'recargo-mensual': 'Pagamento mensal',
      },
      resumen: 'O seu orçamento',
      cuota: 'Mensalidade',
      sinImpuestos: 'sem impostos',
      igi: 'IGI ({porcentaje})',
      total: 'Total por mês',
      implantacion: 'Implementação, a partir de {precio} (pagamento único)',
      avisos: {
        'impuestos-no-incluidos': 'Impostos não incluídos (IVA, TVA ou MwSt., conforme o país).',
        'cashdro-una-empresa': 'O CashDro funciona numa só empresa por instalação.',
        'volumen-empresas': 'Com mais de {max} empresas, tarifa por volume: fazemos-lhe a proposta.',
        'modalidad-b-inminente': 'O alojamento pela Synentor está em desenvolvimento iminente.',
        'muv-a-medida': 'Com mais de {max} utilizadores do MUV, por medida.',
        'requiere-adaptacion': 'Algum módulo não está disponível hoje no seu país: em desenvolvimento iminente ou por medida.',
      },
      botonDemo: 'Peça uma demonstração',
      botonPropuesta: 'Peça a sua proposta',
      botonPedido: 'Enviar a minha seleção',
      pedidoNota: 'Sem pagamento no site: respondemos com a proposta e o contrato por escrito.',
      pedidoAsunto: 'Pedido de encomenda a partir da calculadora',
      sinJs: 'A calculadora precisa de JavaScript. Veja as tabelas abaixo ou escreva-nos.',
    },
    tablas: {
      titulo: 'Todas as tarifas',
      suite: 'Synentor Suite ERP-CRM',
      concepto: 'Conceito',
      precio: 'Preço',
      alMes: '{precio} por mês',
      porPersona: '+ {precio} por pessoa no quadro',
      usuarioAdicional: 'Utilizador adicional',
      empresaAdicional: 'Empresa adicional',
      empresaAdicionalPrecio: '{precio} por mês + os seus módulos a {porcentaje}',
      paquete: 'Pacote Synentor Completo',
      paqueteUsuario: 'Utilizador adicional do pacote: {precio} por mês',
      paqueteObrador: 'Pacote Obrador',
      gestorias: 'Pacote Gabinetes de contabilidade e gestão',
      gestoriasPrecio: '{precio} por mês com {empresas} empresas e {usuarios} utilizadores; {empresa} por cada empresa a mais (até {max}) e {nomina} por recibo de vencimento',
      muv: 'MUV',
      consultoria: 'Consultoria de IA e vendas',
      servicios: 'Energia, migrações, portal e webs',
      verServicios: 'Todos os detalhes, em Serviços',
      implantacion: 'Implementação: {precio} por dia de trabalho',
    },
    condiciones: {
      titulo: 'Condições',
      puntos: [
        'Licença anual, sem fidelização superior a 12 meses e com pré-aviso de 30 dias.',
        'Suporte e atualizações incluídos.',
        'No final, entregamos-lhe o arquivo com os dados da sua empresa.',
        'Preços em euros, sem impostos. Em Andorra, IGI de {igi}.',
        'Pagamento mensal: mais {recargo}.',
      ],
    },
    comparacion: {
      titulo: 'Como nos comparamos',
      texto:
        'Um programa de salários na nuvem cobra entre {nominaMin} e {nominaMax} por pessoa por mês, mais uma mensalidade fixa. Um ERP internacional, cerca de {erp} por utilizador por mês. Com a Synentor paga por empresa e os primeiros {usuarios} utilizadores estão incluídos.',
      fuente: 'Fontes: páginas oficiais de preços dos fabricantes, consultadas em {fecha}.',
      grafico: {
        titulo: 'Exemplo: empresa de {personas} pessoas e {usuarios} utilizadores, por mês',
        synentor: 'Synentor: Base, Compras, RH, Fiscal, Produtos e TPV',
        separado: 'Programa de salários na nuvem + ERP internacional, em separado',
        rango: 'de {min} a {max}',
        nota: 'Sem impostos. Em separado, nenhum dos dois inclui os salários nem a CASS andorranos.',
      },
    },
    faq: {
      titulo: 'Perguntas frequentes',
      preguntas: [
        {
          p: 'Em que idiomas está o programa?',
          r: 'Em castelhano e catalão. Outros idiomas, em desenvolvimento iminente e adaptação por medida ao cliente.',
        },
        {
          p: 'Onde se instala?',
          r: 'Na sua empresa, num servidor ou num NAS: disponível hoje. Alojado pela Synentor em Andorra: em desenvolvimento iminente.',
        },
        {
          p: 'Os dados saem para a nuvem?',
          r: 'As faturas dos fornecedores e os documentos das pessoas são lidos por uma IA que funciona num equipamento da sua empresa. Se alguma função utilizar um serviço externo, dizemos-lho na proposta.',
        },
        { p: 'Funciona em Espanha?', r: 'Sim. Há módulos disponíveis hoje e outros em desenvolvimento iminente: a calculadora diz-lhe módulo a módulo.' },
        { p: 'Há fidelização?', r: 'Licença anual, sem fidelização superior a 12 meses e com pré-aviso de 30 dias.' },
        { p: 'Quem utiliza a Synentor?', r: 'Nasceu a gerir todos os dias uma oficina com lojas de Andorra. E é o programa com que a Synentor trabalha.' },
      ],
    },
  },
  legal: {
    actualizado: 'Última atualização: {fecha}',
    enlaces: {
      privacidad: 'política de privacidade',
      cookies: 'política de cookies',
    },
    aviso: {
      titulo: 'Aviso legal · Synentor',
      encabezado: 'Aviso legal',
      secciones: [
        {
          t: 'Quem é o titular',
          p: [
            'Este site, {web}, pertence à {razon}, sociedade andorrana com sede em {direccion}. NRT (número fiscal andorrano): em curso.',
            'Para qualquer questão, escreva-nos para {correo} ou ligue-nos para o {telefono}.',
          ],
        },
        {
          t: 'Para que serve este site',
          p: [
            'Informa sobre os nossos serviços de consultoria de inteligência artificial e de vendas e sobre os nossos programas. O acesso é gratuito e não é preciso registar-se.',
            'No site não se compra nem se paga nada. Os preços apresentados são indicativos e sem impostos: o que vale é a proposta e o contrato que assinamos consigo por escrito.',
          ],
        },
        {
          t: 'Como o pode utilizar',
          p: [
            'Quem utiliza o site é responsável pela forma como o utiliza. Não é permitido:',
          ],
          lista: [
            'utilizá-lo contra a lei ou contra os direitos de outras pessoas;',
            'tentar entrar nos seus servidores, alterar a sua configuração ou contornar as suas medidas de segurança;',
            'enviar pelo formulário conteúdos ilegais ou ofensivos, publicidade que não pedimos ou dados de outras pessoas sem a autorização delas;',
            'apresentá-lo dentro de outro site ou copiá-lo de forma automática.',
          ],
          despues: [
            'Se alguém não cumprir estas condições, podemos impedir-lhe o acesso.',
          ],
        },
        {
          t: 'Responsabilidade',
          p: [
            'Procuramos que a informação seja correta e esteja atualizada, mas pode conter erros ou dados desatualizados: corrigimo-los assim que os detetamos. Não respondemos pelos danos que possa causar a utilização da informação do site, nem pelas interrupções devidas a manutenção, avarias ou causas alheias a nós, embora tomemos as medidas razoáveis para as evitar.',
          ],
        },
        {
          t: 'Ligações para outros sites',
          p: [
            'O site tem ligações para páginas de outras empresas e organismos. Não as controlamos nem respondemos pelo seu conteúdo, e o facto de termos essas ligações não significa que tenhamos qualquer relação com elas. Consulte as condições próprias de cada uma.',
          ],
        },
        {
          t: 'Propriedade intelectual e industrial',
          p: [
            'A marca e o logótipo da Synentor, os textos, o design, as imagens e o código deste site pertencem à {razon} ou a quem nos deu autorização para os utilizar. Pode vê-los e guardar uma cópia para uso pessoal. Para qualquer outro uso (copiá-los, publicá-los, modificá-los ou utilizá-los para fins comerciais), precisa da nossa autorização por escrito.',
          ],
        },
        {
          t: 'Dados pessoais e cookies',
          p: [
            'A forma como tratamos os dados que nos fornece é explicada na {privacidad}, e os cookies que utilizamos, na {cookies}.',
          ],
        },
        {
          t: 'Línguas',
          p: [
            'O site está em catalão, espanhol, inglês, francês, português, italiano e alemão. Se uma tradução não disser o mesmo que o texto em catalão, prevalece o catalão.',
          ],
        },
        {
          t: 'Lei aplicável e tribunais',
          p: [
            'Estas condições regem-se pela lei andorrana. Para qualquer litígio são competentes os tribunais do Principado de Andorra, salvo se a lei lhe reconhecer o direito de recorrer a outros.',
          ],
        },
        {
          t: 'Alterações',
          p: [
            'Podemos alterar este aviso legal quando for necessário. A data no topo indica quando foi alterado pela última vez.',
          ],
        },
      ],
    },
    privacidad: {
      titulo: 'Política de privacidade · Synentor',
      encabezado: 'Política de privacidade',
      secciones: [
        {
          t: 'Quem trata os seus dados',
          p: [
            'O responsável é a {razon}, sociedade andorrana com sede em {direccion}. NRT (número fiscal andorrano): em curso. Correio eletrónico: {correo}. Telefone: {telefono}.',
            'Não designámos encarregado da proteção de dados: para qualquer questão sobre os seus dados, escreva-nos para {correo}.',
          ],
        },
        {
          t: 'Que dados tratamos, para quê e durante quanto tempo',
          p: [
            'Apenas os necessários para cada finalidade:',
          ],
          lista: [
            'Formulário de contacto. Dados: nome, correio eletrónico, assunto e mensagem e, se os indicar, a empresa e o telefone. Para quê: responder-lhe e, se o pedir, preparar-lhe uma proposta. Fundamento: o seu consentimento, que dá ao assinalar a caixa, e, se pedir uma proposta, as diligências pré-contratuais. Prazo: a mensagem chega-nos por correio eletrónico e o site não a guarda; conservamo-la durante {plazoContacto} a contar do último contacto se não chegar a ser cliente e, se o for, enquanto durar a relação e durante os prazos exigidos por lei.',
            'Verificação antirrobôs do formulário (Cloudflare Turnstile). Dados: o endereço IP e dados técnicos do navegador. Para quê: verificar que o formulário é enviado por uma pessoa. Fundamento: o nosso interesse legítimo em proteger o site contra abusos. Nós não os guardamos.',
            'Prova da sua decisão sobre os cookies. Dados: um identificador aleatório que não o identifica, a versão da política, o que decidiu e a data; nunca o IP. Para quê: poder demonstrar o seu consentimento. Fundamento: a obrigação de o poder demonstrar. Prazo: 12 meses.',
            'Registos técnicos do alojamento (Cloudflare). Dados: o endereço IP, a data e a hora, a página pedida e os erros. Para quê: a segurança e o bom funcionamento do site. Fundamento: o nosso interesse legítimo. Prazo: até {plazoRegistros}.',
            'Estatísticas de visitas (Umami). Sem cookies e sem dados que o identifiquem: apenas números agregados, como as páginas vistas, o país ou o navegador.',
            'Cookies de outras empresas, só se os aceitar: está explicado na {cookies}.',
            'Se nos escrever por correio eletrónico ou nos telefonar: os seus dados de contacto e o que nos contar, para lhe responder, com o mesmo fundamento e o mesmo prazo que o formulário.',
          ],
        },
        {
          t: 'Quem mais vê os seus dados',
          p: [
            'Não vendemos nem cedemos os seus dados. Só os tratam os fornecedores que, por nossa conta, fazem funcionar o site e o correio eletrónico, e as administrações públicas quando a lei o exige:',
          ],
          tabla: 'proveedores',
        },
        {
          t: 'Dados fora de Andorra',
          p: [
            'Alguns destes fornecedores são dos Estados Unidos ou tratam lá dados. Escolhemos fornecedores aderentes ao Quadro de Privacidade de Dados UE-EUA ou que se comprometem por contrato através de cláusulas contratuais-tipo. Ainda assim, os Estados Unidos não oferecem o mesmo nível de proteção que Andorra ou a União Europeia, e as suas autoridades poderão pedir acesso a esses dados.',
          ],
        },
        {
          t: 'Os seus direitos',
          p: [
            'Pode pedir-nos acesso aos seus dados, retificá-los, apagá-los, limitar o seu tratamento, levá-los consigo (portabilidade) ou opor-se a que os tratemos. E pode retirar o seu consentimento quando quiser, sem que isso afete o que foi feito antes.',
            'Escreva-nos para {correo}. Se não pudermos confirmar que é o próprio, pedir-lhe-emos um documento que o identifique, que só usaremos para isso e apagaremos depois. Responder-lhe-emos no prazo fixado pela lei.',
            'Se considerar que não atendemos bem os seus direitos, pode apresentar reclamação junto da Agència Andorrana de Protecció de Dades (Agência Andorrana de Proteção de Dados, APDA), em {apda}.',
          ],
        },
        {
          t: 'Segurança',
          p: [
            'Protegemos os seus dados com medidas técnicas e organizativas: ligação cifrada, acesso apenas de quem precisa e fornecedores com garantias de segurança.',
          ],
        },
        {
          t: 'Menores',
          p: [
            'O site destina-se a empresas e profissionais. Se tiver menos de 16 anos, não nos envie dados sem a autorização do seu pai, da sua mãe ou do seu tutor.',
          ],
        },
        {
          t: 'Leis que aplicamos',
          p: [
            'A Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals (Lei qualificada andorrana 29/2021, de 28 de outubro, de proteção de dados pessoais, LQPD) e, para as pessoas da União Europeia, o Regulamento Geral sobre a Proteção de Dados (RGPD).',
          ],
        },
        {
          t: 'Alterações',
          p: [
            'Se alterarmos esta política, indicá-lo-emos aqui com a nova data. Se a alteração afetar algo a que deu o seu consentimento, voltaremos a perguntar-lhe.',
          ],
        },
      ],
    },
    cookies: {
      titulo: 'Política de cookies · Synentor',
      encabezado: 'Política de cookies',
      ninguna: 'Hoje não usamos nenhum. Se um dia os usarmos, perguntar-lhe-emos antes e aparecerão aqui.',
      secciones: [
        {
          t: 'O que são',
          p: [
            'Os cookies são pequenos ficheiros que um site guarda no seu navegador para se lembrar de algo da sua visita. Aqui também chamamos cookies a outras formas de guardar dados no navegador, como o armazenamento local.',
          ],
        },
        {
          t: 'Os que usamos sempre',
          p: [
            'São os imprescindíveis para que o site funcione ou para recordar o que escolhe. Não precisam do seu consentimento.',
          ],
          tabla: 'necesarias',
        },
        {
          t: 'Estatísticas sem cookies',
          p: [
            'Contamos as visitas com o Umami, que não usa cookies nem guarda dados que o identifiquem.',
          ],
        },
        {
          t: 'Os que só usamos se os aceitar',
          p: [
            'São de dois tipos: estatísticas, para saber como o site é utilizado e melhorá-lo, e publicidade, para medir os nossos anúncios e mostrar-lhe anúncios da Synentor noutros sites. Enquanto não os aceitar, o site não carrega estas ferramentas.',
          ],
          tabla: 'opcionales',
        },
        {
          t: 'A sua decisão',
          p: [
            'Da primeira vez, perguntamos-lhe através de um aviso: pode aceitá-los todos, recusá-los todos ou escolher. As três opções estão igualmente à mão e nenhuma vem marcada.',
            'Pode mudar de ideias quando quiser com o botão «{boton}» no rodapé. Se retirar o consentimento, apagamos os cookies dessas ferramentas que estão no nosso domínio e o site deixa de as carregar; os que essas empresas colocam no seu próprio domínio, pode apagá-los a partir do navegador.',
            'A sua decisão vale 12 meses; depois, voltamos a perguntar-lhe. Guardamos uma prova dela sem o seu IP, como explica a {privacidad}.',
          ],
        },
        {
          t: 'A partir do navegador',
          p: [
            'Também pode bloquear ou apagar os cookies a partir do seu navegador:',
          ],
          lista: [
            '{chrome}',
            '{firefox}',
            '{safari}',
            '{edge}',
          ],
        },
        {
          t: 'Revisão',
          p: [
            'Revemos esta política pelo menos uma vez por ano e sempre que mudamos as ferramentas do site.',
          ],
        },
      ],
    },
    tablas: {
      cookie: 'Cookie',
      titular: 'Quem o coloca',
      finalidad: 'Para quê',
      duracion: 'Duração',
      tipo: 'Tipo',
      propia: 'Próprio',
      terceros: 'De outra empresa',
      sesion: 'Até fechar o navegador',
      persistente: 'Até o apagar',
      proveedor: 'Fornecedor',
      para: 'Para quê',
      donde: 'Onde trata os dados',
      garantia: 'Garantia',
    },
    finalidades: {
      lang: 'Lembrar a língua que escolhe.',
      consentimiento: 'Guardar a sua decisão sobre os cookies.',
      franja: 'Não voltar a mostrar-lhe o aviso de língua se o tiver fechado (armazenamento local).',
      cfBm: 'Segurança: distinguir as pessoas dos robôs, só quando a Cloudflare precisa.',
      cfClearance: 'Segurança: lembrar que passou uma verificação antirrobôs, só se a Cloudflare lha tiver pedido.',
      gaUsuario: 'Distinguir os visitantes para as estatísticas.',
      gaSesion: 'Manter o estado da visita para as estatísticas.',
      clarityUsuario: 'Guardar o identificador do Clarity e as suas preferências, apenas para este site.',
      claritySesion: 'Juntar numa só gravação as páginas de uma mesma visita.',
      clarityPrimeraVez: 'Saber a primeira vez que o Clarity viu este navegador em qualquer site que o utilize.',
      msAnonchk: 'Uso interno da Microsoft relativo ao identificador MUID; o Clarity não o usa para publicidade.',
      msMr: 'Saber se é preciso renovar o identificador MUID.',
      msMuid: 'Identificar o navegador nos sites da Microsoft.',
      msSm: 'Sincronizar o identificador MUID entre os domínios da Microsoft.',
      metaFbp: 'Identificar o navegador para medir e mostrar anúncios da Meta.',
      metaFbc: 'Guardar o anúncio da Meta através do qual chegou.',
      metaFr: 'Mostrar e medir anúncios da Meta.',
      liFatId: 'Medir os resultados dos anúncios do LinkedIn.',
      liSugr: 'Relacionar a visita com membros do LinkedIn para a publicidade.',
      liBcookie: 'Identificar o navegador para detetar abusos.',
      liLidc: 'Escolher o centro de dados do LinkedIn.',
      liUserMatch: 'Sincronizar identificadores para a publicidade.',
      liAnalyticsSync: 'Registar quando foi feita a sincronização com o cookie de análise do LinkedIn.',
      liLmsAds: 'Reconhecer membros do LinkedIn fora do LinkedIn para a publicidade.',
      liLmsAnalytics: 'Reconhecer membros do LinkedIn fora do LinkedIn para a análise.',
    },
    proveedores: {
      cloudflare: {
        para: 'Alojamento do site, verificação antirrobôs do formulário, prova dos consentimentos e registos técnicos.',
        donde: 'A sua rede mundial, com sede nos Estados Unidos. As provas de consentimento são guardadas na União Europeia.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA e cláusulas contratuais-tipo.',
      },
      resend: {
        para: 'Enviar para a nossa caixa de correio a mensagem do formulário.',
        donde: 'Estados Unidos.',
        garantia: 'Cláusulas contratuais-tipo e Quadro de Privacidade de Dados UE-EUA.',
      },
      microsoft365: {
        para: 'O correio eletrónico da empresa, onde recebemos e guardamos as mensagens.',
        donde: 'União Europeia e Estados Unidos.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA e cláusulas contratuais-tipo.',
      },
      umami: {
        para: 'Estatísticas de visitas sem cookies.',
        donde: 'União Europeia (Frankfurt, Alemanha). A empresa é dos Estados Unidos.',
        garantia: 'Cláusulas contratuais-tipo.',
      },
      google: {
        para: 'Estatísticas de visitas (Google Analytics), se as aceitar.',
        donde: 'Estados Unidos e outros países.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA e cláusulas contratuais-tipo.',
      },
      clarity: {
        para: 'Ver como o site é utilizado (Microsoft Clarity), se o aceitar.',
        donde: 'Estados Unidos.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA.',
      },
      meta: {
        para: 'Medir e mostrar anúncios (píxel da Meta), se o aceitar.',
        donde: 'Irlanda e Estados Unidos.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA e cláusulas contratuais-tipo.',
      },
      linkedin: {
        para: 'Medir e mostrar anúncios (LinkedIn Insight Tag), se o aceitar.',
        donde: 'Estados Unidos.',
        garantia: 'Quadro de Privacidade de Dados UE-EUA e cláusulas contratuais-tipo.',
      },
    },
  },
};
