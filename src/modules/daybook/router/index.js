import NoEntrySelected from "@/modules/daybook/views/NoEntrySelected.vue";
import EntryVue from "@/modules/daybook/views/EntryVue.vue";

export default {
  name: "daybook",
  component: () => import(/* webpackChunkName: "daybook" */ "@/modules/daybook/layouts/DayBookLayout.vue"),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: NoEntrySelected
    },
    {
      path: ':id',
      name: 'entry',
      component: EntryVue
    }
  ],
};
