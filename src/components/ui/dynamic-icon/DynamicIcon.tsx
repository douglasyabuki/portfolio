import { Icons, type IconOption } from '@/icons/Icons';

export const DynamicIcon = ({
  iconName,
  ...props
}: { iconName: IconOption } & React.ComponentProps<typeof Icons.Bars>) => {
  const Icon = Icons[iconName];
  return <Icon {...props} />;
};
