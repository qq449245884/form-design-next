import {
  // ElAlert,
  ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  // ElCol,
  ElCollapse,
  ElCollapseItem,
  // ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  // ElIcon,
  // ElImage,
  ElInput,
  ElInputNumber,
  // ElLink,
  ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  // ElRate,
  // ElRow,
  // ElScrollBar,
  ElSelect,
  ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
  // ElInfiniteScroll,
  // ElLoading,
  ElMessage,
  // ElMessageBox,
  // ElNotification,
} from 'element-plus';

const components = [
  // ElAlert,
  ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  // ElCol,
  ElCollapse,
  ElCollapseItem,
  // ElCollapseTransition,
  ElColorPicker,
  ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  ElForm,
  ElFormItem,
  ElHeader,
  // ElIcon,
  // ElImage,
  ElInput,
  ElInputNumber,
  // ElLink,
  ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  ElOption,
  ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  // ElRate,
  // ElRow,
  // ElScrollBar,
  ElSelect,
  ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
]

const plugins = [
  // ElInfiniteScroll,
  // ElLoading,
  ElMessage
  // ElMessageBox,
  // ElNotification,
]
const install = (app: any) => {
  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin)
  })
}

export default install