(self.webpackChunkterra_clinical=self.webpackChunkterra_clinical||[]).push([[4021],{9380:function(e,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.messages=a.locale=a.areTranslationsLoaded=void 0;var t,o=r(8604),i=r(78700),n=(t=i)&&t.__esModule?t:{default:t};(0,o.addLocaleData)(n.default);a.areTranslationsLoaded=!0,a.locale="pt-BR",a.messages={"Terra.AbstractModal.BeginModalDialog":"Iniciar diálogo modal","Terra.AbstractModal.EndModalDialog":"Caixa de diálogo modal final","Terra.actionHeader.back":"Voltar","Terra.actionHeader.close":"Fechar","Terra.actionHeader.close.description":"Selecione o botão para fechar {text}","Terra.actionHeader.maximize":"Maximizar","Terra.actionHeader.maximize.description":"Selecione o botão para maximizar {text}","Terra.actionHeader.minimize":"Minimizar","Terra.actionHeader.minimize.description":"Selecione o botão para minimizar {text}","Terra.actionHeader.next":"Avançar","Terra.actionHeader.previous":"Anterior","Terra.ajax.error":"Falha ao carregar conteúdo.","Terra.avatar.deceased":"Óbito","Terra.clinicalResult.additionalResults":"{numberOfAdditionalResults} resultados adicionais","Terra.clinicalResult.bloodPressure":"Pressão sanguínea","Terra.clinicalResult.includesAdditionalValuesAria":"O resultado inclui valores adicionais","Terra.clinicalResult.interpretationAbnormal":"Anormal","Terra.clinicalResult.interpretationCritical":"Crítico","Terra.clinicalResult.interpretationCriticalAbnormal":"Crítico Anormal","Terra.clinicalResult.interpretationCriticalHigh":"Crítico Alto","Terra.clinicalResult.interpretationCriticalLow":"Crítico Baixo","Terra.clinicalResult.interpretationHigh":"Alto","Terra.clinicalResult.interpretationLow":"Baixo","Terra.clinicalResult.interpretationOutOfRangeHigh":"Fora do intervalo alto","Terra.clinicalResult.interpretationOutOfRangeLow":"Fora do intervalo baixo","Terra.clinicalResult.interpretationPositive":"Positivo","Terra.clinicalResult.resultComment":"O resultado inclui um comentário","Terra.clinicalResult.resultError":"Erro","Terra.clinicalResult.resultModified":"Resultado modificado","Terra.clinicalResult.resultNoData":"Nenhum resultado","Terra.clinicalResult.resultUnverified":"Resultado não verificado","Terra.clinicalResult.selectToViewAria":"Selecione para visualizar mais detalhes","Terra.clinicalResult.statusInError":"Em erro","Terra.clinicalResult.statusInErrorHiddenText":"Valor não documentado como Com erro","Terra.clinicalResult.statusInErrorStrikethrough":"Resultado {strikethroughResult} inserido Em erro","Terra.clinicalResult.viewResults":"Visualizar resultados","Terra.data-grid.navigate":"Navegar para a grade de dados","Terra.data-grid.row-selection-template":"Selecionar: {rowDescription}","Terra.datePicker.calendarInstructions":"Para alterar a seleção, use as teclas de seta. Pressione Enter para selecionar uma data. Pressione Esc para fechar o pop-up do seletor de datas.","Terra.datePicker.closeCalendar":"Fechar","Terra.datePicker.date":"Data","Terra.datePicker.dateFormat":"DD/MM/AAAA","Terra.datePicker.dateFormatLabel":"Formato da data:","Terra.datePicker.dayLabel":"Día","Terra.datePicker.disabled":"Desativado","Terra.datePicker.hotKey":"Pressione T para definir a data atual, a tecla + para a próxima data e a tecla - para a data anterior","Terra.datePicker.invalidDate":"Insira uma Data válida","Terra.datePicker.monthLabel":"Mês","Terra.datePicker.nextMonth":"Mês seguinte","Terra.datePicker.openCalendar":"Calendário aberto","Terra.datePicker.previousMonth":"Mês anterior","Terra.datePicker.selected":"selecionado.","Terra.datePicker.today":"Hoje","Terra.datePicker.yearLabel":"Ano","Terra.form.field.optional":"(facultatif)","Terra.form.select.activeOption":"{text} {index} de {totalOptions}.","Terra.form.select.add":'Adicionar "{text}"',"Terra.form.select.ariaLabel":"Pesquisar","Terra.form.select.clearSelect":"Limpar seleção","Terra.form.select.collapsed":"Caixa de combinação recolhida.","Terra.form.select.defaultComboboxDisplay":"Selecione ou pressione Enter","Terra.form.select.defaultDisplay":"- Selecione -","Terra.form.select.defaultUsageGuidance":"Use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.","Terra.form.select.dimmed":"Esmaecido.","Terra.form.select.disabled":"Desativado.","Terra.form.select.expanded":"Caixa de combinação expandida.","Terra.form.select.listOfTotalOptions":"Lista de opções.","Terra.form.select.maxSelectionHelp":"Limite de itens de {text}.","Terra.form.select.maxSelectionOption":"Número máximo de itens de {text} selecionado","Terra.form.select.menu":"Menu","Terra.form.select.mobileButtonUsageGuidance":"Toque a tela para navegar para as opções.","Terra.form.select.mobileUsageGuidance":"Deslize para a direita para acessar as opções.","Terra.form.select.multiSelectUsageGuidance":"Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar ou cancelar a seleção de uma opção.","Terra.form.select.noResults":'Não há resultados para "{text}"',"Terra.form.select.of":"de","Terra.form.select.optGroup":"Grupo {text}","Terra.form.select.option":"Opções","Terra.form.select.resultsText":'Resultados que contém "{text}"',"Terra.form.select.searchUsageGuidance":"Insira o texto ou use as teclas de seta para cima e para baixo para navegar pelas opções. Pressione Enter para selecionar uma opção.","Terra.form.select.selectCleared":"Selecionar valor limpo","Terra.form.select.selected":"Selecionado.","Terra.form.select.selectedText":"{text} selecionado. {index} de {totalOptions}.","Terra.form.select.unselected":"Não selecionado.","Terra.form.select.unselectedText":"{text} não selecionado.","Terra.hyperlink.iconLabel.audio":"(abre o arquivo de som)","Terra.hyperlink.iconLabel.document":"(abre um documento)","Terra.hyperlink.iconLabel.external":"(abre um aplicativo ou página externa)","Terra.hyperlink.iconLabel.image":"(abre um arquivo de imagem)","Terra.hyperlink.iconLabel.video":"(abre um vídeo)","Terra.icon.IconConsultInstructionsForUse.title":"Instruções eletrônicas para ícone de uso","Terra.itemDisplay.comment":"Comentários","Terra.itemDisplay.textStyleMeaningEnd":"{textStyleMeaning} e","Terra.itemDisplay.textStyleMeaningStrikethrough":"exclusão","Terra.itemDisplay.textStyleMeaningStrikethroughEnd":"exclusão e","Terra.list.cancelDrag":"Movimento cancelado. O item retornou para sua posição inicial de {startPosition}","Terra.list.drag":"Você moveu o item da posição {startPosition} para a posição {endPosition}","Terra.list.drop":"Você desceu o item. Você moveu o item da posição {startPosition} para a posição {endPosition}","Terra.list.focus":"Pressione a barra de espaço para arrastar. Ao fazer a seleção, você pode usar as teclas de seta para mover o item ou Esc para cancelar a seleção","Terra.list.lift":"Você subiu um item na posição {startPosition}. Use as teclas de seta para arrastar o item para uma nova posição. Pressione a barra de espaço para posicionar o item ou Esc para cancelar.","Terra.list.multiSelect":"Seleção de vários itens na lista, para marcar ou desmarcar, pressione Enter ou barra de espaço.","Terra.list.singleSelect":"Seleção de um item na lista, para marcar ou desmarcar, pressione Enter ou a barra de espaço.","Terra.menu.back":"Voltar","Terra.menu.close":"Fechar","Terra.menu.exitSubmenu":"para sair do submenu pressione a seta para a esquerda ou o botão de navegação Voltar","Terra.menu.index":"({index} de {totalItems})","Terra.menu.itemWithSubmenu":"com itens de submenu","Terra.menu.navigateMenuItem":"Para se mover entre os itens, pressione as setas para cima e para baixo","Terra.menu.selected":"selecionado","Terra.menu.unselected":"não selecionado","Terra.notification.dialog.error":"Erro","Terra.notification.dialog.hazard-high":"Alerta","Terra.notification.dialog.hazard-low":"Informações","Terra.notification.dialog.hazard-medium":"Advertência","Terra.onsetPicker.age":"Idade","Terra.onsetPicker.ageLabel":"Insira uma idade","Terra.onsetPicker.agePrecision":"Precisão de idade","Terra.onsetPicker.agePrecisionLabel":"Selecione uma precisão de idade","Terra.onsetPicker.agePrecisionMonth":"Mês(ses)","Terra.onsetPicker.agePrecisionWeek":"Semana(s)","Terra.onsetPicker.agePrecisionYear":"Ano(s)","Terra.onsetPicker.april":"Abril","Terra.onsetPicker.august":"Agosto","Terra.onsetPicker.date":"Date","Terra.onsetPicker.dateLabel":"Selecione uma data","Terra.onsetPicker.december":"Dezembro","Terra.onsetPicker.february":"Fevereiro","Terra.onsetPicker.granularity":"Granularidade","Terra.onsetPicker.granularityLabel":"Selecione uma granulidade de data","Terra.onsetPicker.january":"Janeiro","Terra.onsetPicker.july":"Julho","Terra.onsetPicker.june":"Junho","Terra.onsetPicker.march":"Março","Terra.onsetPicker.may":"Maio","Terra.onsetPicker.month":"Mês","Terra.onsetPicker.monthLabel":"Selecione um mês","Terra.onsetPicker.november":"Novembro","Terra.onsetPicker.october":"Outubro","Terra.onsetPicker.precision":"Precisão","Terra.onsetPicker.precisionAbout":"Sobre","Terra.onsetPicker.precisionAfter":"Após","Terra.onsetPicker.precisionBefore":"Antes","Terra.onsetPicker.precisionLabel":"Selecione uma precisão de data","Terra.onsetPicker.precisionOnAt":"Em","Terra.onsetPicker.precisionUnknown":"Desconhecido","Terra.onsetPicker.september":"Setembro","Terra.onsetPicker.year":"Ano","Terra.onsetPicker.yearLabel":"Selecione um ano","Terra.Overlay.loading":"Carregando...","Terra.popup.header.close":"Fechar","Terra.searchField.clear":"Limpar","Terra.searchField.search":"Pesquisar","Terra.searchField.submit-search":"Enviar pesquisa","Terra.showhide.hide":"Ocultar","Terra.showhide.showmore":"Mostrar mais","Terra.slidePanel.defaultPanelLabel":"Painel de detalhes","Terra.slidePanel.discloseWarning":"Algumas ações nesta área do onteúdo podem acarretar mudanças de contexto nos paineis de detalhes.","Terra.status-view.error":"Erro","Terra.status-view.no-data":"Sem resultados","Terra.status-view.no-matching-results":"Não há resultados correspondentes","Terra.status-view.not-authorized":"Não autorizado","terraApplication.actionMenu.headerCloseButtonLabel":"Fechar","terraApplication.errorBoundary.defaultErrorMessage":"Erro no sistema: {errorDetails}","terraApplication.navigation.drawerMenu.navigation":"Itens de navegação","terraApplication.navigation.drawerMenu.utilities":"Itens de utilitários","terraApplication.navigation.extensions.rollupButtonDescription":"Ferramentas adicionais","terraApplication.navigation.extensions.rollupMenuHeaderTitle":"Ferramentas adicionais","terraApplication.navigation.header.menuButtonTitle":"Menu","terraApplication.navigation.header.skipToContentTitle":"Pular para conteúdo","terraApplication.navigation.header.utilityButtonTitleNoUser":"Opções","terraApplication.navigation.header.utilityButtonTitleUser":"Configurações do usuário para: {currentUserName}","terraApplication.navigation.notifications.new":"Novo","terraApplication.navigation.tabs.rollupButtonDescription":"Mais navegação","terraApplication.navigation.tabs.rollupButtonTitle":"Mais","terraApplication.navigation.tabs.rollupMenuHeaderTitle":"Mais navegação","terraApplication.navigation.utilityMenu.headerTitle":"Utilitários","terraApplication.navigation.utilityMenu.help":"Ajuda","terraApplication.navigation.utilityMenu.logout":"Logoff","terraApplication.navigation.utilityMenu.settings":"Configurações","terraApplication.notificationBanner.advisory":"Aviso.","terraApplication.notificationBanner.alert":"Alerta.","terraApplication.notificationBanner.dismiss":"Dispensar","terraApplication.notificationBanner.error":"Erro.","terraApplication.notificationBanner.info":"Informações.","terraApplication.notificationBanner.success":"Sucesso.","terraApplication.notificationBanner.unsatisfied":"Ação obrigatória.","terraApplication.notificationBanner.unverified":"Registros externos.","terraApplication.notificationBanner.warning":"Cuidado.","terraApplication.notifications.newNotificationLabel":"Nova notificação {label}. {bannerType} {bannerDescription}, {bannerAction}, {bannerDismiss}.","terraApplication.notifications.regionLabel":"{label} notificações.","terraApplication.notifications.removedNotificationLabel":"Notificação {label} removida. {bannerType} {bannerDescription}.","terraApplication.notifications.totalCountLabel":"Total de notificações {label}: {count}","terraApplication.statusLayout.error":"Erro","terraApplication.statusLayout.no-data":"Não há resultados","terraApplication.statusLayout.no-matching-results":"Não há resultados correspondentes","terraApplication.statusLayout.not-authorized":"Não autorizado","terraApplication.unsavedChangesPrompt.acceptButtonText":"Não salvar","terraApplication.unsavedChangesPrompt.multiplePromptMessageIntro":"Alterações não salvas feitas em:","terraApplication.unsavedChangesPrompt.multiplePromptMessageOutro":"Se você não as salvar, essas alterações serão perdidas. Deseja continuar?","terraApplication.unsavedChangesPrompt.rejectButtonText":"Continuar editando","terraApplication.unsavedChangesPrompt.singlePromptMessage":"Alterações não salvas feitas em {promptDescription}.","terraApplication.unsavedChangesPrompt.title":"Alterações sem salvar","terraApplication.workspace.activityOverlay.loading":"Carregando...","terraApplication.workspace.hideWorkspaceLabel":"Ocultar espaço de trabalho","terraApplication.workspace.showWorkspaceLabel":"Mostrar espaço de trabalho","terraApplication.workspace.skipToLabel":"Pular para espaço de trabalho","terraApplication.workspace.workspaceLabel":"Espaço de trabalho","terraApplication.workspace.workspaceSettingsLabel":"Configurações do espaço de trabalho","terraDevSite.pageActivityOverlayContainer.loading":"Carregando...","terraDevSite.pageHeader.actionsMenu":"{label} Actions","terraDevSite.pageHeader.back":"Voltar","terraDevSite.pageHeader.moreActions":"More Actions"}},78700:function(e){e.exports=function(){"use strict";return[{locale:"pt",pluralRuleFunction:function(e,a){var r=String(e).split(".")[0];return a?"other":0==r||1==r?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"em {0} ano",other:"em {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},"year-short":{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"em {0} ano",other:"em {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"em {0} mês",other:"em {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},"month-short":{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"em {0} mês",other:"em {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"em {0} dia",other:"em {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},"day-short":{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"em {0} dia",other:"em {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"em {0} hora",other:"em {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"em {0} h",other:"em {0} h"},past:{one:"há {0} h",other:"há {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"em {0} minuto",other:"em {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},"minute-short":{displayName:"min.",relative:{0:"este minuto"},relativeTime:{future:{one:"em {0} min.",other:"em {0} min."},past:{one:"há {0} min.",other:"há {0} min."}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"em {0} segundo",other:"em {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}},"second-short":{displayName:"seg.",relative:{0:"agora"},relativeTime:{future:{one:"em {0} seg.",other:"em {0} seg."},past:{one:"há {0} seg.",other:"há {0} seg."}}}}},{locale:"pt-AO",parentLocale:"pt-PT"},{locale:"pt-PT",parentLocale:"pt",pluralRuleFunction:function(e,a){var r=!String(e).split(".")[1];return a?"other":1==e&&r?"one":"other"},fields:{year:{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"dentro de {0} ano",other:"dentro de {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},"year-short":{displayName:"ano",relative:{0:"este ano",1:"próximo ano","-1":"ano passado"},relativeTime:{future:{one:"dentro de {0} ano",other:"dentro de {0} anos"},past:{one:"há {0} ano",other:"há {0} anos"}}},month:{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"dentro de {0} mês",other:"dentro de {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},"month-short":{displayName:"mês",relative:{0:"este mês",1:"próximo mês","-1":"mês passado"},relativeTime:{future:{one:"dentro de {0} mês",other:"dentro de {0} meses"},past:{one:"há {0} mês",other:"há {0} meses"}}},day:{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"dentro de {0} dia",other:"dentro de {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},"day-short":{displayName:"dia",relative:{0:"hoje",1:"amanhã",2:"depois de amanhã","-2":"anteontem","-1":"ontem"},relativeTime:{future:{one:"dentro de {0} dia",other:"dentro de {0} dias"},past:{one:"há {0} dia",other:"há {0} dias"}}},hour:{displayName:"hora",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} hora",other:"dentro de {0} horas"},past:{one:"há {0} hora",other:"há {0} horas"}}},"hour-short":{displayName:"h",relative:{0:"esta hora"},relativeTime:{future:{one:"dentro de {0} h",other:"dentro de {0} h"},past:{one:"há {0} h",other:"há {0} h"}}},minute:{displayName:"minuto",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} minuto",other:"dentro de {0} minutos"},past:{one:"há {0} minuto",other:"há {0} minutos"}}},"minute-short":{displayName:"min",relative:{0:"este minuto"},relativeTime:{future:{one:"dentro de {0} min",other:"dentro de {0} min"},past:{one:"há {0} min",other:"há {0} min"}}},second:{displayName:"segundo",relative:{0:"agora"},relativeTime:{future:{one:"dentro de {0} segundo",other:"dentro de {0} segundos"},past:{one:"há {0} segundo",other:"há {0} segundos"}}},"second-short":{displayName:"s",relative:{0:"agora"},relativeTime:{future:{one:"dentro de {0} s",other:"dentro de {0} s"},past:{one:"há {0} s",other:"há {0} s"}}}}},{locale:"pt-CH",parentLocale:"pt-PT"},{locale:"pt-CV",parentLocale:"pt-PT"},{locale:"pt-GQ",parentLocale:"pt-PT"},{locale:"pt-GW",parentLocale:"pt-PT"},{locale:"pt-LU",parentLocale:"pt-PT"},{locale:"pt-MO",parentLocale:"pt-PT"},{locale:"pt-MZ",parentLocale:"pt-PT"},{locale:"pt-ST",parentLocale:"pt-PT"},{locale:"pt-TL",parentLocale:"pt-PT"}]}()}}]);