# Convenção de Enums — band-hub-api

> **Leitura obrigatória antes de criar ou alterar qualquer enum** (TypeScript ou
> coluna `type: 'enum'` no TypeORM). Vale para Claude e para qualquer dev.

## Regra de ouro

- **Chave do enum (código TS): `UPPER_SNAKE_CASE`.** É o idioma do TypeScript e
  como nos referimos ao valor no código (`UserRole.LISTENER`).
- **Valor persistido (banco / JSON da API): `lower_snake_case`.** Tudo que vai
  para o PostgreSQL e para o payload HTTP é minúsculo.

```ts
// ✅ correto
export enum UserRole {
  TECH = 'tech',
  LEADER = 'leader',
  MUSICIAN = 'musician',
  LISTENER = 'listener',
}

export enum Instrument {
  VOCAL = 'vocal',
  BACKING_VOCAL = 'backing_vocal',   // multi-palavra → snake_case minúsculo
  ACOUSTIC_GUITAR = 'acoustic_guitar',
}
```

```ts
// ❌ errado — valor em maiúsculo
export enum UserRole {
  LEADER = 'LEADER',
}
```

## Por quê

1. Consistência entre banco, API e front — o front compara `role === 'leader'`
   sem precisar saber a capitalização.
2. Convenção comum em colunas de banco (snake_case minúsculo).
3. Evita bugs de comparação case-sensitive.

## Checklist ao mexer em enum

- [ ] Chave em `UPPER_SNAKE_CASE`, valor em `lower_snake_case`.
- [ ] Cada palavra extra na chave vira `_` no valor (`BACKING_VOCAL` → `backing_vocal`).
- [ ] A entidade usa `@Column({ type: 'enum', enum: MeuEnum })` referenciando o
      **membro** do enum no `default` (ex.: `default: UserRole.MUSICIAN`), nunca a
      string crua.
- [ ] DTOs validam com `@IsEnum(MeuEnum)`.
- [ ] Front e doc de arquitetura usam o **valor minúsculo**.

## ⚠️ PENDENTE — antes de commitar/deploiar as mudanças de enum (2026-06-05)

Os valores dos enums foram alterados para minúsculo (`'LEADER'` → `'leader'`,
`'PENDING'` → `'pending'`) e o perfil `tech` foi adicionado. Como o banco de prod
hoje tem só dados de teste (uso individual), a decisão é:

> **TODO: LIMPAR o banco de produção antes de subir essas mudanças** — em vez de
> escrever migration de `RENAME VALUE`. Linhas antigas com valor maiúsculo
> conflitam com o novo enum. Não fazer agora; só não esquecer no deploy.

## Atenção: alterar enum já existente em produção

O projeto usa `synchronize: true` (TypeORM). Em **dev**, basta editar o enum.
Em **produção** ou com dados já gravados:

- Mudar o **valor** de um enum (ex.: `'LEADER'` → `'leader'`) **não** migra as
  linhas existentes automaticamente — os registros antigos ficam com o valor
  antigo e podem violar o tipo. Use migration:

```sql
-- Postgres: renomear valor do enum existente
ALTER TYPE users_role_enum RENAME VALUE 'LEADER' TO 'leader';

-- adicionar valor novo
ALTER TYPE users_role_enum ADD VALUE IF NOT EXISTS 'tech';
```

- Sempre rode em dev primeiro e confira o `UPDATE` das linhas existentes.

## Enums atuais do projeto

| Enum | Arquivo | Valores |
|------|---------|---------|
| `UserRole` | `src/users/enums/user-role.enum.ts` | `tech`, `leader`, `musician`, `listener` |
| `ScaleEvent` | `src/scales/enums/scale-event.enum.ts` | `rehearsal`, `service`, `meeting` |
| `ScaleMemberStatus` | `src/scale-members/enums/scale-member-status.enum.ts` | `pending`, `confirmed`, `declined` |
| `Instrument` | `src/common/enums/instrument.enum.ts` | `vocal`, `backing_vocal`, `acoustic_guitar`, `electric_guitar`, `bass`, `drums`, `keyboard`, `sound`, `other` |

> Ao adicionar um enum novo, registre-o nesta tabela.
