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
    enConstitucion: 'em constituição',
    nrt: 'NRT em curso',
    estadisticas: 'Estatísticas de visitas sem cookies (Umami).',
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
    aviso: {
      titulo: 'Aviso legal · Synentor',
      encabezado: 'Aviso legal',
      secciones: [
        {
          t: 'Titular',
          p: 'Este site pertence a {razon} ({estado}), com sede em {direccion}. Correio eletrónico: {correo}. Telefone: {telefono}. NRT e inscrição no Registo de Sociedades Mercantis: em curso.',
        },
        {
          t: 'Utilização do site',
          p: 'A informação deste site é meramente indicativa. Os preços e as condições que valem são os da proposta que lhe fazemos por escrito.',
        },
        {
          t: 'Propriedade intelectual',
          p: 'Os textos, o logótipo e o design deste site pertencem a {razon}. Não os utilize sem a nossa autorização.',
        },
        { t: 'Lei aplicável', p: 'Aplica-se a lei andorrana. Para qualquer litígio, os tribunais do Principado de Andorra.' },
      ],
    },
    privacidad: {
      titulo: 'Política de privacidade · Synentor',
      encabezado: 'Política de privacidade',
      secciones: [
        { t: 'Quem é o responsável', p: '{razon} ({estado}), {direccion}. Correio eletrónico: {correo}.' },
        {
          t: 'Que dados tratamos',
          p: 'Os do formulário de contacto: nome, correio eletrónico, empresa e telefone (estes dois, se os escrever), assunto e mensagem. A mensagem chega-nos por correio eletrónico: o site não a guarda.',
        },
        { t: 'Para quê', p: 'Para lhe responder e, se o pedir, preparar-lhe uma proposta. O fundamento é o seu consentimento.' },
        { t: 'Durante quanto tempo', p: 'O tempo necessário para o atender e o que a lei exigir.' },
        {
          t: 'Quem mais os vê',
          p: 'Os prestadores que fazem funcionar o site: o alojamento e a verificação antirrobô (Cloudflare) e o envio do correio eletrónico. As estatísticas de visitas (Umami) não utilizam cookies nem guardam dados que o identifiquem.',
        },
        {
          t: 'Os seus direitos',
          p: 'Pode pedir acesso, retificação, apagamento, oposição, limitação e portabilidade escrevendo para {correo}. Se não estiver de acordo, pode reclamar junto da Agência Andorrana de Proteção de Dados (apda.ad).',
        },
        {
          t: 'Leis',
          p: 'Lei andorrana de proteção de dados pessoais (Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals) e Regulamento Geral sobre a Proteção de Dados da União Europeia (RGPD) para as pessoas da UE.',
        },
      ],
    },
    cookies: {
      titulo: 'Política de cookies · Synentor',
      encabezado: 'Política de cookies',
      secciones: [
        {
          t: 'O que utilizamos',
          p: 'Um único cookie, «lang», que guarda o idioma que escolhe (um ano). E, no seu navegador, uma marca para não voltar a mostrar-lhe o aviso de idioma se o fechar.',
        },
        { t: 'Estatísticas', p: 'Contamos as visitas com o Umami, sem cookies e sem guardar dados que o identifiquem.' },
        { t: 'Como os remover', p: 'Pode apagá-los quando quiser nas definições do seu navegador.' },
      ],
    },
  },
};
