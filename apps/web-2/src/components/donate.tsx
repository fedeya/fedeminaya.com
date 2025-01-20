import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function DonateMessage() {
  return (
    <DropdownMenu.Root>
      <div className="font-medium">
        One of my projects was helpful?{' '}
        <DropdownMenu.Trigger className="cursor-pointer underline">
          Consider buying me a coffee ☕️
        </DropdownMenu.Trigger>
      </div>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-white shadow-lg border-gray-200 border rounded-md">
          <DropdownMenu.Item asChild>
            <a
              className="w-full block text-center border-b border-gray-200 p-4"
              target="_blank"
              rel="noreferrer noopener"
              href="https://cafecito.app/fedeminaya"
            >
              Argentina 🇦🇷
            </a>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <a
              className="w-full block p-4"
              target="_blank"
              rel="noreferrer noopener"
              href="https://buymeacoffee.com/fedeya"
            >
              Other countries 🌎
            </a>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
